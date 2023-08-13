// passwor class...
class Password {
  constructor() {
    console.log('this is constructor of password....')
    this.pass = ' '
  }
  generatePassword() {
    let input = document.getElementById('inputData').value
    input = parseInt(input)
    // var input = 6
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    let number = '1234567890'
    let special = '!@#$%^&-_*+'
    if (input < 3) {
      alert('This is very.. Weak Password !! \n Please try again  ')
    } else {
      let i = 0

      while (i < input) {
        this.pass += chars[Math.floor(Math.random() * chars.length)]

        this.pass += number[Math.floor(Math.random() * number.length)]

        this.pass += special[Math.floor(Math.random() * special.length)]
        i += 3
      }

      this.pass = this.pass.substr(0, input)
      console.log(this.pass)
      return this.pass
    }
  }
}
function GeneratePass() {
  let opt = document.getElementById('output')
  var obj = new Password()
  opt.innerHTML = obj.generatePassword()
}
