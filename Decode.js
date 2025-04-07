const crypto = require("crypto");
const target =
  "8d1ede4f889e0ed6f0823d8c1821905b9de37a0f851dc270df0dbf72b3c93641";

function SHA256Hash(num) {
  return crypto.createHash("sha256").update(num).digest("hex");
}

function decode() {
  for (let i = 100; i <= 999; i++) {
    const num = i.toString();
    const hashedNum = SHA256Hash(num);
    if (hashedNum == target){
       console.log(`Success , the number is ${num}`);
       return;    
  }

}
  console.log(`Invalid`);
}
decode();

// The number is 317