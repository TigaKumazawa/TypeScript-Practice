// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username? : string): boolean => {
    if (userId === 'ABC') {
        console.log('Function parameters sample: 1: User name is sighned in! Username is', username)
        return true 
    } else {
        console.log('Function parameters sample: 2: User name is not sighned in!')
        return false
    }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username : string = "NO NAME"): boolean => {
    if (userId === 'ABC') {
        console.log('Function parameters sample: 3: User name is sighned in! Username is', username)
        return true 
    } else {
        console.log('Function parameters sample: 4: User name is not sighned in!')
        return false
    }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((prevTotal, productPrice) => {
        return prevTotal + productPrice
    }, 0)
}

// 呼び出しシグネチャ(省略記法)
type logMessage = (message: string)=> void
export const logMessage6: logMessage = (message: string) => {
    console.log('Function parameters sample: 6:',message)
}

// 完全な呼び出しシグネチャ

type FullLogMessage = {
    (message: string): void
}

export const logMessage7 : FullLogMessage = (message: string) => {
    console.log('Function parameters sample: 7:',message)
}