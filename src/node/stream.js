import sinon from 'sinon';

export default function stub() {
    const stream = {
        pipe: sinon.stub().returnsThis()
    };
    return stream;
}
