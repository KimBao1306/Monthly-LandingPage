//scroll to top
function scrollToTop() {
    const t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 0) {
        window.scrollTo(0, t - t);
    }
};

document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);

const scrollClasesBtn = document.querySelectorAll('.scroll-to-classes')
const t = document.documentElement.scrollTop || document.body.scrollTop;
const headerH = document.getElementById('header').offsetHeight

for (let i = 0, len = scrollClasesBtn.length; i < len; i++) {
    scrollClasesBtn[i].addEventListener('click', function () {
        window.scrollTo(0, (t - t) + headerH)
    })
}
