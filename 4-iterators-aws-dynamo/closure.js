
function incByStep(step = 1) {
    let counter = 0;

    return () => {
        counter += step;
        console.log(`step: ${step} counter: ${counter}`);
    }
}

const incBy1 = incByStep(1);
const incBy3 = incByStep(3);

incBy1();
incBy1();

incBy3();
incBy3();
incBy3();
incBy3();