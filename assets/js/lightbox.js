const carousel = document.getElementById("imageCarousel");
if (carousel) {
	const items = Array.from(carousel.querySelectorAll(".carousel-item img"));
	if (items.length) {
		let current = 0, zoomed = false;

		const overlay = document.getElementById("lightbox-overlay"),
		      lbImg = document.getElementById("lightbox-img"),
		      indicators = document.getElementById("lightbox-indicators");

		const indicatorBtns = items.map((_, i) => {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.setAttribute("data-bs-target", "#lightbox-overlay");
			btn.setAttribute("data-bs-slide-to", i);
			btn.setAttribute("aria-label", `Slide ${i + 1}`);
			btn.addEventListener("click", e => { e.stopPropagation(); show(i); });
			indicators.appendChild(btn);
			return btn;
		});

		const setZoom = () => {
			const allow = window.innerWidth > 576;
			lbImg.classList.toggle("zoomed", zoomed && allow);
			lbImg.style.width = zoomed && allow ? `${lbImg.naturalWidth * 2}px` : "";
			lbImg.style.height = zoomed && allow ? `${lbImg.naturalHeight * 2}px` : "";
		};

		const show = (idx) => {
			current = (idx + items.length) % items.length;
			lbImg.src = items[current].src;
			lbImg.alt = items[current].alt;
			indicatorBtns.forEach((btn, i) => {
				btn.classList.toggle("active", i === current);
				i === current ? btn.setAttribute("aria-current", "true") : btn.removeAttribute("aria-current");
			});
			setZoom();
			overlay.classList.add("active");
			document.body.style.overflow = "hidden";
		};

		const hide = () => {
			zoomed = false;
			setZoom();
			overlay.classList.remove("active");
			document.body.style.overflow = "";
		};

		items.forEach((img, i) => {
			img.classList.add("pointer");
			img.addEventListener("click", () => show(i));
		});

		lbImg.classList.add("pointer");
		lbImg.addEventListener("load", setZoom);
		lbImg.addEventListener("click", e => { e.stopPropagation(); zoomed = !zoomed; setZoom(); });

		document.getElementById("lightbox-close").addEventListener("click", hide);
		document.getElementById("lightbox-prev").addEventListener("click", e => { e.stopPropagation(); show(current - 1); });
		document.getElementById("lightbox-next").addEventListener("click", e => { e.stopPropagation(); show(current + 1); });
		overlay.addEventListener("click", e => { if (e.target === overlay) hide(); });
		document.addEventListener("keydown", e => {
			if (!overlay.classList.contains("active")) return;
			if (e.key === "Escape") hide();
			if (e.key === "ArrowLeft") show(current - 1);
			if (e.key === "ArrowRight") show(current + 1);
		});
	}
}
