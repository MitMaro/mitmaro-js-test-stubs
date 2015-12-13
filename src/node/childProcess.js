import sinon from 'sinon';

export default function stub() {
    const process = {
        on: sinon.stub()
    };

    const childProcess = {
        spawn: sinon.stub().returns(process)
    };
    childProcess.spawn._process = process;
    return childProcess;
}
