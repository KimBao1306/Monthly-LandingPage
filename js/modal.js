//modal
const modal = document.querySelector('.modal');

const fadeInModal = () => {
	modal.style.display = 'block';
	setTimeout(() => (modal.style.opacity = 1), 150);
};
document.querySelector('.showModal').addEventListener('click', fadeInModal);

const fadeOutModal = () => {
	modal.style.opacity = 0;
	setTimeout(() => (modal.style.display = 'none'), 500);
};
document.querySelector('.fa-times').addEventListener('click', fadeOutModal);

//add new form to modal - sign in
const signInForm = `<div class="modal-title">
                        <h3>Đăng Nhập</h3>
                        <div>Bạn chưa có tài khoản?
                            <a class="showSignUpForm" href="#"> Đăng Ký Ngay</a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="form-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="email" name="email" id="email" class="form-control email" placeholder="Email" autofocus>
                        </div>
                        <div class="form-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="password" name="psw" id="psw" class="form-control psw" placeholder="Mật Khẩu">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn form-btn">Đăng Nhập</button>
                        <div>
                            <a class="showResetForm" href="#">Quên Mật Khẩu</a>
                        </div>
                    </div>`;
//add new form to modal - sign up
const signUpForm = `<div class="modal-title">
                        <h3>Đăng Ký</h3>
                    </div>
                    <div class="modal-body">
                        <div class="form-group double-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="text" name="fname" id="fname" class="form-control fname" placeholder="Tên" autofocus>
                        </div><div class="form-group double-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="text" name="lname" id="lname" class="form-control lname" placeholder="Họ">
                        </div>
                        <div class="form-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="email" name="email" id="email" class="form-control email" placeholder="Email">
                        </div>
                        <div class="form-group" data-valid="Mật khẩu cần hơn 8 ký tự">
                            <input type="password" name="psw" id="psw" class="form-control psw" placeholder="Mật Khẩu">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn form-btn">Đăng Ký</button>
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
                        <div class="form-group" data-valid="Hãy nhập đúng giá trị">
                            <input type="email" name="email" id="email" class="form-control email" placeholder="Email">
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <button class="info_btn form-btn">Tìm Lại Mật Khẩu</button>
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

document.querySelector('.modal-content').addEventListener('click', addModal);
