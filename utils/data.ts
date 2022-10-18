export const kidData = [
	{
		id: 1,
		page: 1,
		title: 'The Dime',
		image: '',
		text:
			'The dime is called 10c. 10 cents, or ten cents. Franklin Roosevelt was the 32nd President of the USA and he is on the front of the dime',
		exercise: [
			{
				id: 1,
				question: 'Count and add up all of the coins.',
				options: [1, 3, 2],
			},
		],
	},
	{
		id: 2,
		page: 2,
		title: 'Match The Coins',
		text: 'Let us identify the popular coins inthe USA',
		image: '',
		exercise: [
			{
				id: 1,
				question: 'Drag coin from the left to its value on the right',
				options: [
					{ image: 'quarter.png', name: 'Quarter' },
					{ image: 'penny.png', name: 'Penny' },
					{ image: 'nickel.png', name: 'Nickel' },
					{ image: 'dime.png', name: 'Dime' },
				],
			},
		],
	},
	{
		id: 3,
		page: 3,
		title: 'Money in The Bank',
		text:
			'Deposit the coins below by dragging each coin to the piggy bank showing its amount.',
		image: '',
		exercise: [
			{
				id: 1,
				options: ['1c', '5c', '10c', '25c'],
			},
		],
	},
	{
		id: 4,
		page: 4,
		title: 'The Quarter',
		text:
			'The quarter is called 25c. 25 cents, or twnty five cents. George Washington was the 1st presdient and he is on the front of the quarter.',
		image: '',
		exercise: [
			{
				id: 1,
				question: 'Count and add up all of the coins.',
				options: [1, 3, 2],
			},
		],
	},
	{
		id: 5,
		page: 5,
		title: 'Money Matching',
		text:
			'Can you match the correct amount of money to each wallet? drag coin from righ to the pot in the left.',
		image: '',
		exercise: [
			{
				id: 1,
				options: ['1c', '26c', '10c', '5c', '16c', '25c'],
			},
		],
	},
	{
		id: 6,
		page: 6,
		title: "Let's Go Shopping",
		text:
			'pick the coins below to show how much you need to buy this little bunny.',
		image: '',
		exercise: [
			{
				id: 1,
				options: [],
				answer: '26c',
			},
		],
	},
	{
		id: 7,
		page: 7,
		title: 'Weekly Saving',
		text:
			'Each week, give students a specific amount that they had to put aside and save.',
		image: '',
		exercise: [
			{
				id: 1,
				question:
					'What will you save for? Name 3 things you would save for with your money jar.',
			},
		],
	},
	{
		id: 8,
		page: 8,
		title: 'Coin Recognition',
		text: 'Drag the correct coin into the box',
		image: '',
		exercise: [
			{
				id: 1,
				options: [],
			},
		],
	},
	{
		id: 9,
		page: 9,
		title: 'Coin Sorting',
		text: 'drag and drop each coin to the appropriate column',
		image: '',
		exercise: [
			{
				id: 1,
				options: ['quarter (25c)', 'dime(10c)', 'nickel(5c)', 'penny(1c)'],
				question: 'drag and drop each coin to the appropriate column',
			},
		],
	},
	{
		id: 10,
		page: 10,
		title: 'Work A Little, Earn A Little',
		text: '',
		exercise: [
			{
				id: 1,
				options: [],
			},
		],
		poem: [
			{
				verse: 1,
				text: [
					'Work a little, earn a little',
					'Work a little, spend a little',
					'Work, work, work',
					'And earn a little more',
				],
			},
			{
				verse: 2,
				text: [
					'Save a little, spend a little',
					'Save a little, spend a little',
					'Save, save, save',
					'And spend a little more',
				],
			},
			{
				verse: 3,
				text: [
					'Want a little, need a little',
					'Want a little, need a little',
					'Want, want, want',
					'And need a little more',
				],
			},
			{
				verse: 4,
				text: [
					'Give a little, share a little',
					'Give a little, share a little',
					'Give, give, give',
					'And share a little more',
				],
			},
			{
				verse: 5,
				text: [
					'Work a little, earn a little',
					'Work a little, spend a little',
					'Work work, work',
					'And earn a little more',
				],
			},
		],
	},
	{
		id: 11,
		page: 11,
		title: 'Making Lemonade!',
		text:
			'Lulu wants a new game. It costs $5.00. To earn money Lulu has a lemonade stand. Each glass of lemonade costs 25 cents. Tell how much money Lulu needs to buy the game',
		image: '',
		exercise: [
			{
				id: 1,
				options: [],
			},
		],
	},
	{
		id: 12,
		page: 12,
		title: 'Money',
		text: 'Count the money in each purse. Write the amount.',
		image: '',
		exercise: [
			{
				id: 1,
				question: 'Count and add up all of the coins in the bags.',
				options: [
					{
						coins: ['penny', 'penny', 'penny'],
						value: 3,
					},
					{
						coins: ['dime', 'penny', 'dime'],
						value: 21,
					},
					{
						coins: ['nickel', 'penny', 'dime'],
						value: 16,
					},
					{
						coins: ['quarter', 'penny', 'nickel'],
						value: 31,
					},
					{ coins: ['quarter', 'quarter', 'dime'], value: 60 },
				],
			},
		],
		// exercise: [
		//   { id: 1, answer: "75c" },
		//    { id: 2, answer: "47c" },
		//    { id: 3, answer: "65c" },
		//    { id: 4, answer: "55c" },
		//    { id: 5, answer: "1$10c" },
		//    { id: 6, answer: "87c" },
		// ],
	},
	
];


export const kidDataSecond = [{
	id: 13,
	page: 13,
	title: 'Coin Worksheet',
	image: '',
	exercise: [
		{
			id: 1,
			question:
				'A quarter is ___ cents. It takes ____ quarters to make $1.00',
			answer: [25, 4],
			image: '',
		},
		{
			id: 2,
			question: 'A dime is ___ cents. It takes ____ dimes to make $1.00',
			answer: [10, 10],
			image: '',
		},
		{
			id: 1,
			question: 'A nickel is ___ cents. It takes ____ nickels to make $1.00',
			answer: [5, 20],
			image: '',
		},
		{
			id: 1,
			question: 'A penny is ___ cents. It takes ____ pennies to make $1.00',
			answer: [1, 100],
			image: '',
		},
	],
},
	{
		id: 14,
		title: 'Economic Check-Up',
		text: 'Match the following terms with the correct definition.',
		image: '',
		exercise: [
			{
				id: 1,
				left: [
					'Goods',
					'Services',
					'Natural Resource',
					'Human Resource',
					'Capital Resource',
				],
				right: [
					'a resource made from nature',
					'a resource used to make good',
					'an object people can want or hold',
					'people who produce goods and services',
					'an action a person does for someone else',
				],
			},
		],
	},
	{
		id: 15,
		page: 15,
		image: '',
		exercise: [
			{
				left: ['good'],
				right: ['service'],
				options: [
					'one',
					'two',
					'three',
					'four',
					'five',
					'six',
					'seven',
					'eight',
					'nine',
					'ten',
					'eleven',
					'twelve',
				],
			},
		],
	},
	{
		id: 16,
		page: 16,
		image: '',
		title: 'Wishlist',
		text:
			"Oh no! You're stranded on a desert island, all alone and with nothing but the clothes on your back. The good news is that a genie has appeared and will grant you ten wishes. The only thing you must do is decide if each wish is a want or a need. Drag and drop items you will need to survive",
		exercise: [
			{
				id: 1,
				options: [
					'clean water',
					'books',
					'radio',
					'batteries',
					'binoculars',
					'food',
					'knife',
					'comic books',
					'rope',
					'paper and pencil',
					'blanket',
					'suntan lotion',
					'sunglasses',
					'deck of cards',
					'hat',
					'first aid kit',
				],
			},
		],
	},
	{
		id: 17,
		page: 17,
		title: 'Can You Buy It?',
		text: 'Is there enough money to buy each item? select yes or no',
		exercise: [
			{
				id: 1,
				answer: '52c',
				options: ['', ','],
				image: '',
			},
			{
				id: 2,
				answer: '90c',
				options: ['', ','],
				image: '',
			},
			{
				id: 3,
				answer: '12c',
				options: ['', ','],
				image: '',
			},
			{
				id: 4,
				answer: '18c',
				options: ['', ','],
				image: '',
			},
			{
				id: 5,
				answer: '73c',
				options: ['', ','],
				image: '',
			},
			{
				id: 6,
				answer: '89c',
				options: ['', ','],
				image: '',
			},
			{
				id: 7,
				answer: '61c',
				options: ['', ','],
				image: '',
			},
			{
				id: 8,
				answer: '47c',
				options: ['', ','],
				image: '',
			},
			{
				id: 9,
				answer: '34c',
				options: ['', ','],
				image: '',
			},
		],
	},
	{
		id: 18,
		page: 18,
		title: 'The coins you need.',
		text: 'pick the coins you need to buy the item on the left',
		exercise: [
			{
				id: 1,
				answer: '10c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 2,
				answer: '20c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 3,
				answer: '60c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 4,
				answer: '20c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 5,
				answer: '50c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 6,
				answer: '40c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 7,
				answer: '30c',
				options: ['', '', '', '', '', ''],
			},
			{
				id: 8,
				answer: '40c',
				options: ['', '', '', '', '', ''],
			},
		],
	}]