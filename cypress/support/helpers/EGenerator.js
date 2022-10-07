class EmailGenerator {
  static generate(baseEmail) {
    const randomNumber = EmailGenerator.getRandomInt(1, 5000);
    const uniqueId = `+a${randomNumber}`;
    return baseEmail.replace("@", `${uniqueId}@`);
  }

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default EmailGenerator;
