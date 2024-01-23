export default function notExistSample() {
    let name = null
    console.log("notExist  Sample1:", typeof name, name )
    name = "taiga"
    if (name) {
        console.log("notExist  Sample2:", "吾輩は猫です。名前は" + name )
    } else {
        console.log("notExist  Sample3:", "吾輩は猫です。名前はまだ" + name )
    }
    
    let age = undefined
    console.log("notExist  Sample4:", typeof age , age )
    age = 30
    if (age) {
        console.log("notExist  Sample6:", "年齢は"+ age+ "です" )
    } else {
        console.log("notExist  Sample5:", "年齢は秘密です。" )
    }

}