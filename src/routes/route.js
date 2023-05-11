import { PUBLIC_URL } from '../utils/const';

export const menu = [
  {
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

export const dropdownheader = [
  {
    name: 'Thông tin cá nhân',
    link: '/collaborator',
  },
  {
    name: 'Đăng xuất',
    link: '/logout',
  },
];
