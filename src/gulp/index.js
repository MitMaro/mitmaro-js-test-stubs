import sinon from 'sinon';
import streamStub from '../node/stream';

export default function stub() {
    const srcStream = streamStub();

    const gulp = {
        src: sinon.stub().returns(srcStream),
        dest: sinon.stub()
    };
    gulp.src._stream = srcStream;
    return gulp;
}
