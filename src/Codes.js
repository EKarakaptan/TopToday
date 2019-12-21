const codes = [
  { name: 'Afghanistan', code: 'AF', country_code: '004' },
  { name: 'Åland Islands', code: 'AX', country_code: '248' },
  { name: 'Albania', code: 'AL', country_code: '008' },
  { name: 'Algeria', code: 'DZ', country_code: '012' },
  {
    name: 'American Samoa',
    code: 'AS',
    country_code: '016'
  },
  { name: 'Andorra', code: 'AD', country_code: '020' },
  { name: 'Angola', code: 'AO', country_code: '024' },
  { name: 'Anguilla', code: 'AI', country_code: '660' },
  { name: 'Antarctica', code: 'AQ', country_code: '010' },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    country_code: '028'
  },
  { name: 'Argentina', code: 'AR', country_code: '032' },
  { name: 'Armenia', code: 'AM', country_code: '051' },
  { name: 'Aruba', code: 'AW', country_code: '533' },
  { name: 'Australia', code: 'AU', country_code: '036' },
  { name: 'Austria', code: 'AT', country_code: '040' },
  { name: 'Azerbaijan', code: 'AZ', country_code: '031' },
  { name: 'Bahamas', code: 'BS', country_code: '044' },
  { name: 'Bahrain', code: 'BH', country_code: '048' },
  { name: 'Bangladesh', code: 'BD', country_code: '050' },
  { name: 'Barbados', code: 'BB', country_code: '052' },
  { name: 'Belarus', code: 'BY', country_code: '112' },
  { name: 'Belgium', code: 'BE', country_code: '056' },
  { name: 'Belize', code: 'BZ', country_code: '084' },
  { name: 'Benin', code: 'BJ', country_code: '204' },
  { name: 'Bermuda', code: 'BM', country_code: '060' },
  { name: 'Bhutan', code: 'BT', country_code: '064' },
  {
    name: 'Bolivia (Plurinational State of)',
    code: 'BO',
    country_code: '068'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    code: 'BQ',
    country_code: '535'
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    country_code: '070'
  },
  { name: 'Botswana', code: 'BW', country_code: '072' },
  { name: 'Bouvet Island', code: 'BV', country_code: '074' },
  { name: 'Brazil', code: 'BR', country_code: '076' },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    country_code: '086'
  },
  {
    name: 'Brunei Darussalam',
    code: 'BN',
    country_code: '096'
  },
  { name: 'Bulgaria', code: 'BG', country_code: '100' },
  { name: 'Burkina Faso', code: 'BF', country_code: '854' },
  { name: 'Burundi', code: 'BI', country_code: '108' },
  { name: 'Cabo Verde', code: 'CV', country_code: '132' },
  { name: 'Cambodia', code: 'KH', country_code: '116' },
  { name: 'Cameroon', code: 'CM', country_code: '120' },
  { name: 'Canada', code: 'CA', country_code: '124' },
  {
    name: 'Cayman Islands',
    code: 'KY',
    country_code: '136'
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    country_code: '140'
  },
  { name: 'Chad', code: 'TD', country_code: '148' },
  { name: 'Chile', code: 'CL', country_code: '152' },
  { name: 'China', code: 'CN', country_code: '156' },
  {
    name: 'Christmas Island',
    code: 'CX',
    country_code: '162'
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
    country_code: '166'
  },
  { name: 'Colombia', code: 'CO', country_code: '170' },
  { name: 'Comoros', code: 'KM', country_code: '174' },
  { name: 'Congo', code: 'CG', country_code: '178' },
  {
    name: 'Congo, Democratic Republic of the',
    code: 'CD',
    country_code: '180'
  },
  { name: 'Cook Islands', code: 'CK', country_code: '184' },
  { name: 'Costa Rica', code: 'CR', country_code: '188' },
  { name: "Côte d'Ivoire", code: 'CI', country_code: '384' },
  { name: 'Croatia', code: 'HR', country_code: '191' },
  { name: 'Cuba', code: 'CU', country_code: '192' },
  { name: 'Curaçao', code: 'CW', country_code: '531' },
  { name: 'Cyprus', code: 'CY', country_code: '196' },
  { name: 'Czechia', code: 'CZ', country_code: '203' },
  { name: 'Denmark', code: 'DK', country_code: '208' },
  { name: 'Djibouti', code: 'DJ', country_code: '262' },
  { name: 'Dominica', code: 'DM', country_code: '212' },
  {
    name: 'Dominican Republic',
    code: 'DO',
    country_code: '214'
  },
  { name: 'Ecuador', code: 'EC', country_code: '218' },
  { name: 'Egypt', code: 'EG', country_code: '818' },
  { name: 'El Salvador', code: 'SV', country_code: '222' },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    country_code: '226'
  },
  { name: 'Eritrea', code: 'ER', country_code: '232' },
  { name: 'Estonia', code: 'EE', country_code: '233' },
  { name: 'Eswatini', code: 'SZ', country_code: '748' },
  { name: 'Ethiopia', code: 'ET', country_code: '231' },
  {
    name: 'Falkland Islands (Malvinas)',
    code: 'FK',
    country_code: '238'
  },
  { name: 'Faroe Islands', code: 'FO', country_code: '234' },
  { name: 'Fiji', code: 'FJ', country_code: '242' },
  { name: 'Finland', code: 'FI', country_code: '246' },
  { name: 'France', code: 'FR', country_code: '250' },
  { name: 'French Guiana', code: 'GF', country_code: '254' },
  {
    name: 'French Polynesia',
    code: 'PF',
    country_code: '258'
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
    country_code: '260'
  },
  { name: 'Gabon', code: 'GA', country_code: '266' },
  { name: 'Gambia', code: 'GM', country_code: '270' },
  { name: 'Georgia', code: 'GE', country_code: '268' },
  { name: 'Germany', code: 'DE', country_code: '276' },
  { name: 'Ghana', code: 'GH', country_code: '288' },
  { name: 'Gibraltar', code: 'GI', country_code: '292' },
  { name: 'Greece', code: 'GR', country_code: '300' },
  { name: 'Greenland', code: 'GL', country_code: '304' },
  { name: 'Grenada', code: 'GD', country_code: '308' },
  { name: 'Guadeloupe', code: 'GP', country_code: '312' },
  { name: 'Guam', code: 'GU', country_code: '316' },
  { name: 'Guatemala', code: 'GT', country_code: '320' },
  { name: 'Guernsey', code: 'GG', country_code: '831' },
  { name: 'Guinea', code: 'GN', country_code: '324' },
  { name: 'Guinea-Bissau', code: 'GW', country_code: '624' },
  { name: 'Guyana', code: 'GY', country_code: '328' },
  { name: 'Haiti', code: 'HT', country_code: '332' },
  {
    name: 'Heard Island and McDonald Islands',
    code: 'HM',
    country_code: '334'
  },
  { name: 'Holy See', code: 'VA', country_code: '336' },
  { name: 'Honduras', code: 'HN', country_code: '340' },
  { name: 'Hong Kong', code: 'HK', country_code: '344' },
  { name: 'Hungary', code: 'HU', country_code: '348' },
  { name: 'Iceland', code: 'IS', country_code: '352' },
  { name: 'India', code: 'IN', country_code: '356' },
  { name: 'Indonesia', code: 'ID', country_code: '360' },
  {
    name: 'Iran (Islamic Republic of)',
    code: 'IR',
    country_code: '364'
  },
  { name: 'Iraq', code: 'IQ', country_code: '368' },
  { name: 'Ireland', code: 'IE', country_code: '372' },
  { name: 'Isle of Man', code: 'IM', country_code: '833' },
  { name: 'Israel', code: 'IL', country_code: '376' },
  { name: 'Italy', code: 'IT', country_code: '380' },
  { name: 'Jamaica', code: 'JM', country_code: '388' },
  { name: 'Japan', code: 'JP', country_code: '392' },
  { name: 'Jersey', code: 'JE', country_code: '832' },
  { name: 'Jordan', code: 'JO', country_code: '400' },
  { name: 'Kazakhstan', code: 'KZ', country_code: '398' },
  { name: 'Kenya', code: 'KE', country_code: '404' },
  { name: 'Kiribati', code: 'KI', country_code: '296' },
  {
    name: "Korea (Democratic People's Republic of)",
    code: 'KP',
    country_code: '408'
  },
  {
    name: 'Korea, Republic of',
    code: 'KR',
    country_code: '410'
  },
  { name: 'Kuwait', code: 'KW', country_code: '414' },
  { name: 'Kyrgyzstan', code: 'KG', country_code: '417' },
  {
    name: "Lao People's Democratic Republic",
    code: 'LA',
    country_code: '418'
  },
  { name: 'Latvia', code: 'LV', country_code: '428' },
  { name: 'Lebanon', code: 'LB', country_code: '422' },
  { name: 'Lesotho', code: 'LS', country_code: '426' },
  { name: 'Liberia', code: 'LR', country_code: '430' },
  { name: 'Libya', code: 'LY', country_code: '434' },
  { name: 'Liechtenstein', code: 'LI', country_code: '438' },
  { name: 'Lithuania', code: 'LT', country_code: '440' },
  { name: 'Luxembourg', code: 'LU', country_code: '442' },
  { name: 'Macao', code: 'MO', country_code: '446' },
  { name: 'Madagascar', code: 'MG', country_code: '450' },
  { name: 'Malawi', code: 'MW', country_code: '454' },
  { name: 'Malaysia', code: 'MY', country_code: '458' },
  { name: 'Maldives', code: 'MV', country_code: '462' },
  { name: 'Mali', code: 'ML', country_code: '466' },
  { name: 'Malta', code: 'MT', country_code: '470' },
  {
    name: 'Marshall Islands',
    code: 'MH',
    country_code: '584'
  },
  { name: 'Martinique', code: 'MQ', country_code: '474' },
  { name: 'Mauritania', code: 'MR', country_code: '478' },
  { name: 'Mauritius', code: 'MU', country_code: '480' },
  { name: 'Mayotte', code: 'YT', country_code: '175' },
  { name: 'Mexico', code: 'MX', country_code: '484' },
  {
    name: 'Micronesia (Federated States of)',
    code: 'FM',
    country_code: '583'
  },
  {
    name: 'Moldova, Republic of',
    code: 'MD',
    country_code: '498'
  },
  { name: 'Monaco', code: 'MC', country_code: '492' },
  { name: 'Mongolia', code: 'MN', country_code: '496' },
  { name: 'Montenegro', code: 'ME', country_code: '499' },
  { name: 'Montserrat', code: 'MS', country_code: '500' },
  { name: 'Morocco', code: 'MA', country_code: '504' },
  { name: 'Mozambique', code: 'MZ', country_code: '508' },
  { name: 'Myanmar', code: 'MM', country_code: '104' },
  { name: 'Namibia', code: 'NA', country_code: '516' },
  { name: 'Nauru', code: 'NR', country_code: '520' },
  { name: 'Nepal', code: 'NP', country_code: '524' },
  { name: 'Netherlands', code: 'NL', country_code: '528' },
  { name: 'New Caledonia', code: 'NC', country_code: '540' },
  { name: 'New Zealand', code: 'NZ', country_code: '554' },
  { name: 'Nicaragua', code: 'NI', country_code: '558' },
  { name: 'Niger', code: 'NE', country_code: '562' },
  { name: 'Nigeria', code: 'NG', country_code: '566' },
  { name: 'Niue', code: 'NU', country_code: '570' },
  {
    name: 'Norfolk Island',
    code: 'NF',
    country_code: '574'
  },
  {
    name: 'North Macedonia',
    code: 'MK',
    country_code: '807'
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    country_code: '580'
  },
  { name: 'Norway', code: 'NO', country_code: '578' },
  { name: 'Oman', code: 'OM', country_code: '512' },
  { name: 'Pakistan', code: 'PK', country_code: '586' },
  { name: 'Palau', code: 'PW', country_code: '585' },
  {
    name: 'Palestine, State of',
    code: 'PS',
    country_code: '275'
  },
  { name: 'Panama', code: 'PA', country_code: '591' },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    country_code: '598'
  },
  { name: 'Paraguay', code: 'PY', country_code: '600' },
  { name: 'Peru', code: 'PE', country_code: '604' },
  { name: 'Philippines', code: 'PH', country_code: '608' },
  { name: 'Pitcairn', code: 'PN', country_code: '612' },
  { name: 'Poland', code: 'PL', country_code: '616' },
  { name: 'Portugal', code: 'PT', country_code: '620' },
  { name: 'Puerto Rico', code: 'PR', country_code: '630' },
  { name: 'Qatar', code: 'QA', country_code: '634' },
  { name: 'Réunion', code: 'RE', country_code: '638' },
  { name: 'Romania', code: 'RO', country_code: '642' },
  {
    name: 'Russian Federation',
    code: 'RU',
    country_code: '643'
  },
  { name: 'Rwanda', code: 'RW', country_code: '646' },
  {
    name: 'Saint Barthélemy',
    code: 'BL',
    country_code: '652'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    code: 'SH',
    country_code: '654'
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    country_code: '659'
  },
  { name: 'Saint Lucia', code: 'LC', country_code: '662' },
  {
    name: 'Saint Martin (French part)',
    code: 'MF',
    country_code: '663'
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    country_code: '666'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    country_code: '670'
  },
  { name: 'Samoa', code: 'WS', country_code: '882' },
  { name: 'San Marino', code: 'SM', country_code: '674' },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
    country_code: '678'
  },
  { name: 'Saudi Arabia', code: 'SA', country_code: '682' },
  { name: 'Senegal', code: 'SN', country_code: '686' },
  { name: 'Serbia', code: 'RS', country_code: '688' },
  { name: 'Seychelles', code: 'SC', country_code: '690' },
  { name: 'Sierra Leone', code: 'SL', country_code: '694' },
  { name: 'Singapore', code: 'SG', country_code: '702' },
  {
    name: 'Sint Maarten (Dutch part)',
    code: 'SX',
    country_code: '534'
  },
  { name: 'Slovakia', code: 'SK', country_code: '703' },
  { name: 'Slovenia', code: 'SI', country_code: '705' },
  {
    name: 'Solomon Islands',
    code: 'SB',
    country_code: '090'
  },
  { name: 'Somalia', code: 'SO', country_code: '706' },
  { name: 'South Africa', code: 'ZA', country_code: '710' },
  {
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS',
    country_code: '239'
  },
  { name: 'South Sudan', code: 'SS', country_code: '728' },
  { name: 'Spain', code: 'ES', country_code: '724' },
  { name: 'Sri Lanka', code: 'LK', country_code: '144' },
  { name: 'Sudan', code: 'SD', country_code: '729' },
  { name: 'Suriname', code: 'SR', country_code: '740' },
  {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ',
    country_code: '744'
  },
  { name: 'Sweden', code: 'SE', country_code: '752' },
  { name: 'Switzerland', code: 'CH', country_code: '756' },
  {
    name: 'Syrian Arab Republic',
    code: 'SY',
    country_code: '760'
  },
  {
    name: 'Taiwan, Province of China',
    code: 'TW',
    country_code: '158'
  },
  { name: 'Tajikistan', code: 'TJ', country_code: '762' },
  {
    name: 'Tanzania, United Republic of',
    code: 'TZ',
    country_code: '834'
  },
  { name: 'Thailand', code: 'TH', country_code: '764' },
  { name: 'Timor-Leste', code: 'TL', country_code: '626' },
  { name: 'Togo', code: 'TG', country_code: '768' },
  { name: 'Tokelau', code: 'TK', country_code: '772' },
  { name: 'Tonga', code: 'TO', country_code: '776' },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
    country_code: '780'
  },
  { name: 'Tunisia', code: 'TN', country_code: '788' },
  { name: 'Turkey', code: 'TR', country_code: '792' },
  { name: 'Turkmenistan', code: 'TM', country_code: '795' },
  {
    name: 'Turks and Caicos Islands',
    code: 'TC',
    country_code: '796'
  },
  { name: 'Tuvalu', code: 'TV', country_code: '798' },
  { name: 'Uganda', code: 'UG', country_code: '800' },
  { name: 'Ukraine', code: 'UA', country_code: '804' },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    country_code: '784'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    code: 'GB',
    country_code: '826'
  },
  {
    name: 'United States of America',
    code: 'US',
    country_code: '840'
  },
  {
    name: 'United States Minor Outlying Islands',
    code: 'UM',
    country_code: '581'
  },
  { name: 'Uruguay', code: 'UY', country_code: '858' },
  { name: 'Uzbekistan', code: 'UZ', country_code: '860' },
  { name: 'Vanuatu', code: 'VU', country_code: '548' },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    code: 'VE',
    country_code: '862'
  },
  { name: 'Viet Nam', code: 'VN', country_code: '704' },
  {
    name: 'Virgin Islands (British)',
    code: 'VG',
    country_code: '092'
  },
  {
    name: 'Virgin Islands (U.S.)',
    code: 'VI',
    country_code: '850'
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
    country_code: '876'
  },
  {
    name: 'Western Sahara',
    code: 'EH',
    country_code: '732'
  },
  { name: 'Yemen', code: 'YE', country_code: '887' },
  { name: 'Zambia', code: 'ZM', country_code: '894' },
  { name: 'Zimbabwe', code: 'ZW', country_code: '716' }
]
