function createList(channels) {
    
    // Sorting channel list by 'name' attribute, taking note if duplicate exists during sort. Keeps array of all duplicate values and prints to console (feel free to change)
    let duplicate = [];
    channels.sort((channel1, channel2) => {
        let c1 = channel1['name'].toLowerCase(),
            c2 = channel2['name'].toLowerCase();
        if ( channel1['id'] == channel2['id'] || c1 == c2 ) {
            duplicate.push(c1);
            return 0;
        } else if ( c1 > c2 ) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(duplicate);

    return channels.map((channel) => `
        <a href="https://www.youtube.com/channel/${channel.id}/videos" class="channel ta-c" target="_blank">
            ${channel.name}
        </a>
    `).join('');
}

document.querySelector('.channel-list')
    .innerHTML = createList(window.channels);
