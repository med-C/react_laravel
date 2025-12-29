export default function St() {
    let a = 0;
    const interval = setInterval(() =>
        <li>hello world {a+1}</li>, 1000);

    return (
        <>
            {interval}
        </>
    )
}