export const MainMenu = [
    {title: 'Home', to: '/'},
    {title: 'About us', to: 'about'},
    {title: 'Service', to: 'service'},
    {title: 'Page', to: 'pricing-plan',
        children: [
            {title: 'Pricing Plan', to: 'pricing-plan'},
            {title: 'FAQ', to: 'faq'},
            {title: 'Terms & Conditions', to: 'terms-conditions'},
            {title: 'Privacy Policy', to: 'privacy-police'}
        ]
    },
    {title: 'Blog', to: 'blog',
        children: [
            {title: 'Detail Service', to: 'detail-service'},
            {title: 'Blog', to: 'blog'},
            {title: 'Our Team', to: 'team'}
        ]
    }  
]
export const FooterMenuQuicklinks = [
    {title: 'Home', to: '/'},
    {title: 'Pricing Plan', to: 'pricing-plan'},
    {title: 'Service', to: 'service'},
    {title: 'Blog', to: 'blog'},
    {title: 'Our Team', to: 'team'}
]
export const FooterMenuSupport = [
    {title: 'About us', to: 'about'},
    {title: 'Contact us', to: 'contact'},
    {title: 'FAQ', to: 'faq'},
    {title: 'Terms & Conditions', to: 'terms-conditions'},
    {title: 'Privacy Policy', to: 'privacy-police'}
]