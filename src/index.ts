// import World from './world';
// const root = document.getElementById('root');
// const world = new World("Hello world!");
// world.sayHello(root)


// 03.基本の型定義
// import { unknownSample,anySample,notExistSample,primitiveSample } from "./basic";
// anySample()
// unknownSample()
// primitiveSample()
// notExistSample()

// 04. 関数の型定義
import {logMessage} from './function/basic'
import {isUserSignedIn} from './function/patrameters'
import {isUserSignedIn2} from './function/patrameters'
import {sumProductsPrice} from './function/patrameters'

logMessage("Hello world!")
isUserSignedIn("ABC", "tora")
isUserSignedIn("DEF", "tora")
isUserSignedIn2("ABC")
const sum = sumProductsPrice(100,200,350)
console.log('Function parameters sample 5:',sum)