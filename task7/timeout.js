function wait(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

wait(2, () => {
    console.log('two seconds');
});

wait(1, () => {
    console.log('three seconds');
});

wait(1, () => {
    console.log('four seconds');
});
