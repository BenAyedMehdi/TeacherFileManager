// assets
import { ChromeOutlined, QuestionOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const documents = {
    id: 'documents',
    title: 'documents',
    type: 'group',
    children: [
        {
            id: 'Cours',
            title: 'Cours',
            type: 'item',
            url: '/cours',
            icon: icons.ProfileOutlined
        },
        {
            id: 'TD',
            title: 'TD',
            type: 'item',
            url: '/td',
            icon: icons.QuestionOutlined
        },
        {
            id: 'Autre',
            title: 'Autre',
            type: 'item',
            url: '/autre',
            icon: icons.ChromeOutlined
        }
    ]
};

export default documents;
