const Pre = ({ load }: { load: boolean }) => <div id={load ? 'preloader' : 'preloader-none'}></div>;

export default Pre;
