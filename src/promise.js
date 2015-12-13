import sinon from 'sinon';

export default function stub() {
    const promise = {
        then: sinon.stub()
    };
    return promise;
}
