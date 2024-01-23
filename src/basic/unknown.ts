export default function unknownSample() {
    const maybeNumber: unknown = 10
    console.log("unknown Sample1:", typeof maybeNumber, maybeNumber )
    
    const isFoo = maybeNumber ==="foo"
    console.log("unknown Sample2:", typeof isFoo, isFoo )
    
    // const sum = maybeNumber + 10
    
    if (typeof maybeNumber === 'number' ) {
        const sum = maybeNumber + 10
        console.log("unknown Sample3:", typeof sum, sum )
    }
}