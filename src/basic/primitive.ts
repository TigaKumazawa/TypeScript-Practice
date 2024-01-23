export default function primitiveSample () {
    // console.log("hooooo")
    let name: string = 'tora'
    // name = 1
    console.log("primitive Sample1:", typeof name, name )
    
    let age: number = 28
    console.log("primitive Sample2:", typeof age, age )
    
    let isSingle: boolean = true
    console.log("primitive Sample:3", typeof isSingle, isSingle )
    
    const isOver20: boolean = age > 20
    console.log("primitive Sample:4", typeof isOver20, isOver20 )
}