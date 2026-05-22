const filterBtns = document.querySelectorAll('.filter-btn');
const talkBlocks = document.querySelectorAll('.talk-block[data-dept]');

filterBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const dept = btn.dataset.dept;

		filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

		talkBlocks.forEach((block) => {
			const show = dept === 'all' || block.dataset.dept === dept || block.dataset.dept === 'SVE';
			block.style.display = show ? '' : 'none';
		});
	});
});
