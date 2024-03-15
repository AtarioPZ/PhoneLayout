const Feed = () => {
    const feedItems = [
        { date: '2024-03-15', type: 'call', name: 'John Doe', time: '10:30 AM', detail: 'Tried to call John Doe' },
        { date: '2024-03-14', type: 'receive', name: 'Jane Smith', time: '11:45 AM', detail: 'Missed call from Jane Smith' },
        { date: '2024-03-13', type: 'call', name: 'Alice Johnson', time: '02:15 PM', detail: 'Called Alice Johnson' },
        { date: '2024-03-12', type: 'receive', name: 'Bob Williams', time: '04:20 PM', detail: 'Received call from Bob Williams' }
    ];

    return (
        <div className='text-black'>
            <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
            {feedItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-600">{item.date}</span>
                        <span>{item.time}</span>
                    </div>
                    <div className="flex items-center">
                        <span className={`mr-2 ${item.type === 'call' ? 'text-green-500' : 'text-red-500'}`}>
                            <i className={`fas fa-phone-alt ${item.type === 'call' ? 'text-green-500' : 'text-red-500'}`}></i>
                        </span>
                        <span className="mr-auto">{item.name}</span>
                        <span>{item.detail}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feed;
