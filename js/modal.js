//modal
const modal = document.querySelector('.modal');

const fadeInModal = () => {
    modal.style.display = 'block';
    setTimeout(() => modal.style.opacity = 1, 150);
}
document.querySelector('.showModal').addEventListener('click', fadeInModal)

const fadeOutModal = () => {
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 500);
}
document.querySelector('.fa-times').addEventListener('click', fadeOutModal)

//add new form to modal - sign in
const signInForm = `<div class="modal-title">
                        <h3>Đăng Nhập</h3>
                        <div>Bạn chưa có tài khoản?
                            <a class="showSignUpForm" href="#"> Đăng Ký Ngay</a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" name="usn" id="usn" class="usn" placeholder="Tên Đăng Nhập" autofocus>
                        </div>
                        <div class="form-group">
                            <input type="password" name="psw" id="psw" class="psw" placeholder="Mật Khẩu">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn">Đăng Nhập</button>
                        <div>
                            <a class="showResetForm" href="#">Quên Mật Khẩu</a>
                        </div>
                    </div>`;
//add new form to modal - sign up
const signUpForm = `<div class="modal-title">
                        <h3>Đăng Ký</h3>
                    </div>
                    <div class="modal-body">
                        <div class="form-group double-group">
                            <input type="text" name="fname" id="fname" class="fname" placeholder="Tên" autofocus>
                            <input type="text" name="lname" id="lname" class="lname" placeholder="Họ">
                        </div>
                        <div class="form-group">
                            <input type="text" name="usn" id="usn" class="usn" placeholder="Tên Đăng Nhập">
                        </div>
                        <div class="form-group">
                            <input type="password" name="psw" id="psw" class="psw" placeholder="Mật Khẩu">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn">Đăng Ký</button>
                        <div>Bạn đã có tài khoản?
                            <a class="showSignInForm" href="#">Đăng Nhập</a>
                        </div>
                    </div>`;
//add new form to modal - reset password
const resetForm = `<div class="modal-title">
                        <h3>Tìm Mật Khẩu</h3>
                        <div>Bạn vẫn còn nhớ mật khẩu?
                            <a class="showSignInForm" href="#"> Đăng nhập</a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" name="usn" id="usn" class="usn" placeholder="Tên Đăng Nhập">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn">Tìm Lại Mật Khẩu</button>
                    </div>`;

function addModal(e) {
    switch (e.target.className) {
        case 'showSignInForm':
            this.innerHTML = signInForm;
            break;
        case 'showSignUpForm':
            this.innerHTML = signUpForm;
            break;
        case 'showResetForm':
            this.innerHTML = resetForm;
            break;
    }
}

document.querySelector('.modal-content').addEventListener('click', addModal)
