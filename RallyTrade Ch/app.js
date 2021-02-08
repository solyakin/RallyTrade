const signUp = document.querySelector('#sign-up-btn');
const FormDisplay = document.querySelector('.form-section');
const login = document.querySelector('#login');
const form = document.querySelector('.form');
const registration = document.querySelector('#registration');
const closeSigningForm = document.querySelector('.close-btn')

signUp.addEventListener('click', () => {
    
     FormDisplay.style.display = 'block';
    signUp.style.display = 'none';


    login.addEventListener('click', () => {
        const markup = `<form>
            <div class="group">
                <label for="last-name">Username</label>
                <input type="text" name="last name">
            </div>
            <div class="group">
                <label for="password">Password</label>
                <input type="password" name="password">
            </div>
        </form>
        `
        form.innerHTML = markup;
    })
    registration.addEventListener('click', () => {
        const markupTwo = `<form action="">
            <div class="group">
                <label for="first-name">First name</label>
                <input type="text" name="first-name">
            </div>
            <div class="group">
                <label for="last-name">Last name</label>
                <input type="text" name="last name">
            </div>
            <div class="group">
                <label for="email">Email</label>
                <input type="email" name="email">
            </div>
            <div class="group">
                <label for="phone-number">Phone Number</label>
                <input type="text" name="phone number">
            </div>
            <div class="group">
                <label for="country">Country</label>
                <input type="text" name="country">
            </div>
        
        </form>`
        form.innerHTML = markupTwo;
        registration.style.color = 'grey';
    })
})

closeSigningForm.addEventListener('click', () => {
    FormDisplay.style.display = "none"
    signUp.style.display = "block"
})