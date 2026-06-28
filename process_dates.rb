ignored_folders = [ ".", "..", "_data", "_includes", "_layouts", "_sass", "_site" ]
theme_collections = []

Dir.each_child(".") do |item|
    if !ignored_folders.index(item) && File.directory?(item) && item[0] == "_"
        theme_collections.push(item)
    end
end

edit = false
theme_collections.each do |theme|
    puts "Processing #{theme} themes..."
    Dir.glob("#{theme}/*.md") do |file|
        if !File.foreach(file).grep(/^created:/).any?
            creation_time = Time.at(`git log --reverse --pretty=%at -- "#{file}" | head -n 1`.to_i, in: '+00:00').strftime("%Y-%m-%d %H:%M:%S%z")
            update_time = Time.at(`git log -n 1 --pretty=%at -- "#{file}"`.to_i, in: '+00:00').strftime("%Y-%m-%d %H:%M:%S%z")
            edit = true

            puts "adding creation/update times to #{file}"
            md = File.new(file,"r")
            data = md.readlines
            md.close

            # insert after title (2nd line)
            data.insert(2, "created: #{creation_time}\n")
            data.insert(3, "updated: #{update_time}\n")
            File.write(file, data.join, mode: "w")
        else
            puts "checking #{file} for updates"
            update_time = `git log -n 1 --pretty="%s|%at" -- "#{file}"`.split("|")
            update_time[1] = Time.at(update_time[1].to_i, in: '+00:00').strftime("%Y-%m-%d %H:%M:%S%z")
            if update_time[0] != "process theme update times"
                puts "writing new update time to #{file}"
                edit = true

                md = File.new(file,"r")
                data = md.readlines
                md.close

                data[3] = "updated: #{update_time[1]}\n"
                File.write(file, data.join, mode: "w")
            end
        end
    end
end

if edit
    puts "committing time changes"
    theme_collections.each do |theme|
        `git add #{theme}/*.md`
    end
    `git commit -m "process theme update times"`
    # push only if the -p flag is added (for GH actions)
    if ARGV[0] == "-p"
        `git push`
    end
end
