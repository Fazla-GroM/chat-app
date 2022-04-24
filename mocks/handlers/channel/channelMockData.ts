const commentMockData = {
    data: {
        comments: [
            {
                id: 1,
                author: {
                    name: 'Ivana Paradzikovic',
                    picture: 'https://i.pravatar.cc/48?img=24'
                },
                text: 'Hello there, so I was wondering if you know how much MB is in a GB?',
                timestamp: 414514740000
            },
            {
                id: 2,
                parent_id: 1,
                author: {
                    name: 'Zmaj Sipovski',
                    picture: 'https://i.pravatar.cc/48?img=66'
                },
                text: 'Hey Ivana! Have you tried Googling that?',
                timestamp: 414514860000
            },
            {
                id: 3,
                parent_id: 1,
                author: {
                    name: 'Ines Grah',
                    picture: 'https://i.pravatar.cc/48?img=45'
                },
                text: 'Zmaj has a point, tho I’d say its about 1000MB in a GB.',
                timestamp: 414516900000
            },
            {
                id: 4,
                author: {
                    name: 'Pero Pipovski',
                    picture: 'https://i.pravatar.cc/48?img=18'
                },
                text: 'Hey guys, here is a nice web for that complicated conversion. <a href="https://www.convertunits.com/from/MB/to/GB" target="_blank" rel="noopener norefferer">www.convertunits.com/from/MB/to/GB</a>',
                timestamp: 1626861080278
            }
        ]
    }
}

export { commentMockData }
