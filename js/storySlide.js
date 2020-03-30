//story slide
const actors = [
    {
        name: 'Ten Hundred',
        img: './img/story/actor1b.jpg',
        expert: 'Chuyên gia vẽ những ý tưởng cùng bạn',
        chanel: {
            youtube: '255k',
            ins: '83k',
        },
        intro: 'Ten Hundred là một nghệ sĩ đến từ Seattle, WA, người chuyên làm việc sáng tạo, giàu trí tưởng tượng. Ông đã tạo ra tác phẩm cho một số công ty lớn nhất trên thế giới, như Amazon, Nordstrom và Converse. Ten Hundred đã xây dựng một lượng người theo dõi và truyền cảm hứng cho hàng trăm ngàn nghệ sĩ khác.'
    },
    {
        name: 'Andrew Huang',
        img: './img/story/actor2b.jpg',
        expert: 'Chuyên gia sản xuất âm nhạc',
        chanel: {
            youtube: '1.92M',
            ins: '170k',
        },
        intro: 'Một nhạc sĩ đa năng và sung mãn, Andrew Huang đã phát hành hơn 2.000 bài hát trong một loạt các thể loại. Ông có lẽ được biết đến nhiều nhất với những kỳ tích kỳ lạ về âm nhạc đã mang lại cho ông hơn 1,92 triệu người đăng ký và hơn 200 triệu lượt xem trên kênh YouTube của mình. Andrew là âm nhạc.'
    },
    {
        name: 'Daria Callie',
        img: './img/story/actor3b.jpg',
        expert: 'Chuyên gia tranh chân dung thực tế',
        chanel: {
            youtube: '535k',
            ins: '183k',
        },
        intro: 'Daria Callie là một nghệ sĩ chuyên nghiệp được biết đến rộng rãi với những bức tranh sơn dầu của cô. Trong các tác phẩm của mình, cô tạo ra những thế giới nơi chủ nghĩa hiện thực và sự trừu tượng cùng tồn tại. Cô sử dụng màu sắc nhẹ nhàng nhưng biểu cảm để hỗ trợ cảm giác thanh thản, mạnh mẽ và tự do.'
    },
    {
        name: 'Blanks',
        img: './img/story/actor4b.jpg',
        expert: 'Chuyên gia sáng tác nhạc',
        chanel: {
            youtube: '1.12M',
            ins: '258k',
        },
        intro: 'Blanks (Simon de Wit) là một nhạc sĩ đa tài nổi tiếng với những thử thách âm nhạc ấn tượng trên Youtube: làm lại các bài hát nổi tiếng từ đầu trong một giờ, tái tạo các bài hát theo phong cách hoàn toàn khác và tạo ra các bài hát với những người theo dõi anh. Lượt tiếp cận Youtube của Blanks vượt quá 41 triệu lượt xem video.'
    },
    {
        name: 'Stevie Mackey',
        img: './img/story/actor5b.jpg',
        expert: 'Chuyên gia thanh nhạc',
        chanel: {
            youtube: '',
            ins: '329k',
        },
        intro: 'Trong thập kỷ qua, Stevie Mackey là huấn luyện viên thanh nhạc của nhiều nghệ sĩ khao khát và thành lập như Selena Gomez, Jennifer Lopez, Fergie, Kanye West và Kelly Rowland, kể tên một vài người. Stevie đã làm việc với NBC từ The Voice trong hơn 8 mùa, và vẫn huấn luyện một số tên tuổi lớn nhất trong âm nhạc.'
    },
    {
        name: 'Matt Komo',
        img: './img/story/actor6b.jpg',
        expert: 'Chuyên gia phim ảnh',
        chanel: {
            youtube: '180k',
            ins: '196k',
        },
        intro: 'Tài năng của Matt Komo với tư cách là nhà quay phim và nhiếp ảnh gia đã đưa anh ta đi khắp thế giới khi anh ta ghi lại quan điểm độc đáo của mình về nhiều điểm đến của mình. Là cựu Giám đốc Nội dung Xã hội của GoPro, Matt đã tăng sự hiện diện của thương hiệu trên Instagram từ 3 lên 13,6 triệu. Quan trọng nhất, công việc của Matt đã nói lên điều đó.'
    }
];

const imgs = Array.from(document.querySelector('.list_actor').getElementsByTagName('img'));

imgs.forEach((img) => img.addEventListener('click', selectActor))

function selectActor() {
    imgs.forEach((img) => img.classList.remove('selected'))
    this.classList.add('selected')
    introActor(actors[this.dataset.idactor - 1])
}

function introActor({ name, img, expert, chanel, intro }) {
    const behindSect = document.querySelector('.behind_actor');
    const innerEl = `<div class="img_actor">
                        <img src="${img}" alt="">
                    </div>
                    <div class="content_actor">
                        <h3 class="name-actor">${name}</h3>
                        <div class="expert-actor">
                            ${expert}
                        </div>
                        <div class="chanel-actor">
                            <div class="chanel">
                                <svg width="36" height="25" fill="none" class="youtube-play">
                                    <path
                                        d="M34.878 3.877a4.452 4.452 0 00-3.15-3.136C28.95 0 17.811 0 17.811 0S6.671 0 3.894.741a4.452 4.452 0 00-3.15 3.136C0 6.644 0 12.415 0 12.415s0 5.772.744 8.538c.41 1.527 1.617 2.678 3.15 3.086 2.778.742 13.917.742 13.917.742s11.14 0 13.917-.742c1.533-.408 2.74-1.56 3.15-3.086.744-2.766.744-8.538.744-8.538s0-5.771-.744-8.538zm-20.71 13.779V7.176l9.31 5.24-9.31 5.24z"
                                        fill="#ff0000"></path>
                                </svg>
                                <span>${chanel.youtube} Subscribers</span>
                            </div>
                            <div class="chanel">
                                <svg width="35" height="35" fill="none" class="youtube-play">
                                    <path
                                        d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35z"
                                        fill="url(#prefix__paint0_linear)"></path>
                                    <path
                                        d="M17.502 11.921a5.569 5.569 0 00-5.577 5.579 5.569 5.569 0 005.577 5.578 5.569 5.569 0 005.577-5.578 5.569 5.569 0 00-5.577-5.579zm0 9.205a3.633 3.633 0 01-3.626-3.627c0-2 1.626-3.626 3.626-3.626s3.626 1.626 3.626 3.627c0 2-1.631 3.626-3.626 3.626zm7.106-9.433c0 .723-.583 1.301-1.301 1.301a1.301 1.301 0 111.3-1.301zm3.693 1.32c-.082-1.742-.48-3.286-1.757-4.558-1.271-1.272-2.815-1.67-4.557-1.757-1.796-.102-7.179-.102-8.975 0-1.737.082-3.28.48-4.557 1.752-1.277 1.272-1.67 2.816-1.757 4.559-.102 1.796-.102 7.18 0 8.976.082 1.743.48 3.287 1.757 4.559 1.276 1.272 2.815 1.67 4.557 1.757 1.796.102 7.179.102 8.975 0 1.742-.082 3.286-.48 4.557-1.757 1.272-1.272 1.67-2.816 1.757-4.559.102-1.796.102-7.175 0-8.971zm-2.32 10.9a3.671 3.671 0 01-2.067 2.068c-1.432.568-4.83.437-6.412.437-1.582 0-4.985.126-6.412-.437a3.671 3.671 0 01-2.068-2.068c-.567-1.433-.436-4.83-.436-6.413 0-1.583-.127-4.986.436-6.414a3.671 3.671 0 012.068-2.068c1.432-.568 4.83-.437 6.412-.437 1.582 0 4.985-.126 6.412.437a3.67 3.67 0 012.067 2.068c.568 1.432.437 4.83.437 6.414 0 1.582.131 4.985-.437 6.413z"
                                        fill="#fff"></path>
                                    <defs>
                                        <linearGradient id="prefix__paint0_linear" x1="17.5" y1="0" x2="0" y2="35"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#860193"></stop>
                                            <stop offset="0.578" stop-color="#FF1622"></stop>
                                            <stop offset="1" stop-color="#FFE005"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>${chanel.ins} Followers</span>
                            </div>
                        </div>
                        <div class="intro-actor">${intro}</div>
                        <div class="class-actor">
                            <a href="#">Go to class now</a>
                        </div>
                    </div>`;
    behindSect.innerHTML = innerEl;
}
