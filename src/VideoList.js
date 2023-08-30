import Video from './Video';

function VideoList({videos, BASELINE}) {
    return (
        <div className='App'>
            <div className='app__videos'>
            {console.log(videos.length)}
            {videos.map((item, index) => {
                
                return (<Video key={index} id={index} url={item.url} user={item.user} caption={item.caption} baseline={BASELINE} />)}
            )}
            </div>
        </div>
    )
}

export default VideoList;