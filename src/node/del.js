import sinon from 'sinon';
import promiseStub from '../promise';

export default function stub() {
    const promise = promiseStub();
    const del = sinon.stub().returns(promise);
    del._promise = promise;
    return del;
}
