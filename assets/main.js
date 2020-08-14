function createList(channels) {
    channels.sort((channel1, channel2) => {
        if (channel1['name'].toLowerCase() > channel2['name'].toLowerCase()) {
            return 1;
	} else {
            return -1;
	}
    });

    return channels.map((channel) => `
        <a href="https://www.youtube.com/channel/${channel.id}/videos" class="channel ta-c" target="_blank">
            ${channel.name}
        </a>
    `).join('');
}

document.querySelector('.channel-list')
    .innerHTML = createList(window.channels);
