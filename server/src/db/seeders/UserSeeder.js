import User from "../../models/User.js"

const company1 = { name: "Google", email: "theOGmail@gmail.com", password: "encryptedPass", location: "Mountain View, CA", isEmployer: true, picture: "https://openthread.google.cn/images/ot-contrib-google.png", description: "Google is what google does. You know us. We're google. Don't know who we are? Google it." }

const company2 = {
  name: "NFTerrible", email: "dont@me.com", password: "narcissus", location: "San Francisco, CA", isEmployer: true, picture: "https://openthread.google.cn/images/ot-contrib-google.png", description: "We will bend your stardust body to the needs of our stockholders."
}

const ordinaryGuy = {
  name: "Doug Itup", email: "getitup@gmail.com", password: "stilllearning", location: "Boston, MA", github: "github.com/ditup", linkedin: "linkedin.com/in/doug", phone: "9784718747", isEmployer: false, picture: "https://openthread.google.cn/images/ot-contrib-google.png"
}

class UserSeeder {
  static async seed() {
    console.log(company1)
    await User.query().insert(company1)
    await User.query().insert(company2)
    await User.query().insert(ordinaryGuy)
  }
}

export default UserSeeder