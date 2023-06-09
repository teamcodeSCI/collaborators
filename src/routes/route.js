import { PUBLIC_URL } from '../utils/const';
const role = 'User';
export const menu =
    role === 'ADMIN' ? [{
            name: 'Trang chủ',
            icon: `${PUBLIC_URL}/icons/home.svg`,
            link: '/',
            dropdown: [],
        },
        {
            name: 'Cộng tác viên',
            icon: `${PUBLIC_URL}/icons/ctv.svg`,
            link: '/collaborators-list',
            dropdown: [],
        },
        {
            name: 'Báo cáo',
            icon: `${PUBLIC_URL}/icons/report.svg`,
            link: '#',
            dropdown: [
                { name: 'Báo cáo Khách hàng', link: '/report-customer-manage' },
                { name: 'Báo cáo Doanh thu', link: '/report-revennue-manage' },
                { name: 'Báo cáo Dịch vụ', link: '/report-service-manage' },
            ],
        },
    ] : [{
            name: 'Trang chủ',
            icon: `${PUBLIC_URL}/icons/home.svg`,
            link: '/',
            dropdown: [],
        },
        {
            name: 'Khách hàng',
            icon: `${PUBLIC_URL}/icons/customer.svg`,
            link: '/customer-list',
            dropdown: [],
        },
        {
            name: 'Báo cáo',
            icon: `${PUBLIC_URL}/icons/report.svg`,
            link: '#',
            dropdown: [
                { name: 'Báo cáo Khách hàng', link: '/report-customer' },
                { name: 'Báo cáo Dịch vụ', link: '/report-service' },
                { name: 'Báo cáo Tài chính', link: '/report-finance' },
            ],
        },
    ];

export const dropdownheader = [{
        name: 'Thông tin cá nhân',
        link: `/collaborator`,
    },
    {
        name: 'Đăng xuất',
        link: `/login`,
    },
];

export const customerList = [{
        id: 'kn123',
        name: 'Nguyễn Hạ Vy',
        phone: '0987654321',
        address: 'Hà Nội',
        group: 'Đến cửa',
        created_at: '02/03/2023',
        link: `/detail-customer`,
    },
    {
        id: 'kn456',
        name: 'Nguyễn Văn B',
        phone: '0987654321',
        address: 'Hà Nam',
        group: 'Thành công',
        created_at: '02/03/2023',
        llink: `/detail-customer`,
    },
    {
        id: 'kn545',
        name: 'Mai Thị Hiền',
        phone: '0987654321',
        address: 'Nam Định',
        group: 'Không thành công',
        created_at: '02/03/2023',
        link: `/detail-customer`,
    },
];

export const collaboratosList = [{
        id: 'kn123',
        name: 'Nguyễn Hạ Vy',
        phone: '0987654321',
        address: 'Hà Nội',
        group: 'Kí hợp đồng',
        ratings: 'Hạng A',
        link: '/detail-collaborators',
    },
    {
        id: 'kn456',
        name: 'Nguyễn Văn B',
        phone: '0987654321',
        address: 'Hà Nam',
        group: 'Không kí hợp đồng',
        ratings: 'Hạng B',
        link: '/detail-collaborators',
    },
    {
        id: 'kn545',
        name: 'Mai Thị Hiền',
        phone: '0987654321',
        address: 'Nam Định',
        group: 'Không kí hợp đồng',
        ratings: 'Hạng C',
        link: '/detail-collaborators',
    },
];