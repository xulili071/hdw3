document.addEventListener('DOMContentLoaded', function() {
    // 模块切换功能
    const navItems = document.querySelectorAll('.module-nav li');
    const modules = document.querySelectorAll('.resume-content .module');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有导航项的active类
            navItems.forEach(nav => nav.classList.remove('active'));
            // 为当前点击的导航项添加active类
            this.classList.add('active');
            
            // 获取对应模块的ID
            const moduleId = this.getAttribute('data-module');
            
            // 隐藏所有模块
            modules.forEach(module => {
                module.classList.remove('active');
            });
            
            // 显示对应模块
            document.getElementById(moduleId).classList.add('active');
        });
    });
    
    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // 添加滚动动画效果
    const animatedElements = document.querySelectorAll('.module');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});