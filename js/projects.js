// Edita esta lista para agregar/quitar proyectos.
// id:          nombre corto sin espacios, se usa en la URL (proyecto.html?id=ecommerce)
// image:       portada de la tarjeta (recomendado 1200x750, formato 16:10) dentro de ./img/projects/
// images:      galería de la página del proyecto (agrega o quita las que tengas)
// description: texto corto de la tarjeta
// details:     párrafos de la página del proyecto
// highlights:  (opcional) lista de puntos destacados
// private:     true si es de una empresa y no puede compartirse (muestra "Proyecto confidencial")
// demo / code: pon "" si no aplica y el botón no se mostrará.
const projects = [
    {
        id: "ecommerce",
        title: "Ecommerce integrado con backend personalizado",
        description: "Tienda online con WordPress y Elementor, conectada a un backend a medida y al sistema contable de la empresa.",
        details: [
            "Desarrollé una tienda online combinando WordPress y Elementor con un backend a medida en TypeScript, Node.js y Express, logrando una plataforma robusta, rápida y completamente integrada con el sistema contable de la empresa.",
            "El resultado es un ecommerce que no solo ofrece una excelente experiencia de usuario, sino que también optimiza la gestión interna del negocio."
        ],
        highlights: [
            "Diseño intuitivo y flexible con WordPress y Elementor.",
            "Pagos seguros y eficientes gracias a la integración con Medianet.",
            "Backend optimizado con Redis para caché ultrarrápida y MongoDB para almacenamiento persistente.",
            "Sincronización en tiempo real con el sistema contable, asegurando precisión en cada transacción."
        ],
        role: "Desarrollo web y backend",
        year: "Ene 2025 – Actualidad",
        platform: "Freelancer.com",
        image: "./img/projects/ecommerce-1.jpg",
        images: [
            "./img/projects/ecommerce-1.jpg",
            "./img/projects/ecommerce-2.jpg",
            "./img/projects/ecommerce-3.jpg",
            "./img/projects/ecommerce-4.jpg",
            "./img/projects/ecommerce-5.jpg",
            "./img/projects/ecommerce-6.jpg"
        ],
        tags: ["WordPress", "Elementor", "TypeScript", "Node.js", "Express", "Redis", "MongoDB"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "crm-inmobiliaria",
        title: "CRM a medida para inmobiliaria",
        description: "CRM diseñado a la medida de una inmobiliaria para gestionar clientes, propiedades y el seguimiento de ventas.",
        details: [
            "Desarrollo de un CRM a medida para una inmobiliaria, pensado para centralizar en un solo lugar la información de clientes, propiedades y oportunidades de venta.",
            "A diferencia de un CRM genérico, el sistema se adapta al proceso comercial real de la empresa, de modo que el equipo trabaja con las herramientas que necesita y no al revés."
        ],
        highlights: [
            "Gestión de clientes y prospectos con su historial de contacto.",
            "Administración del inventario de propiedades.",
            "Seguimiento de oportunidades a lo largo del proceso de venta.",
            "Diseñado a medida del flujo de trabajo de la inmobiliaria."
        ],
        role: "Desarrollo de software a medida",
        year: "2026",
        image: "./img/projects/crm-inmobiliaria-1.jpg",
        images: [
            "./img/projects/crm-inmobiliaria-1.jpg",
            "./img/projects/crm-inmobiliaria-2.jpg",
            "./img/projects/crm-inmobiliaria-3.jpg",
            "./img/projects/crm-inmobiliaria-4.jpg",
            "./img/projects/crm-inmobiliaria-5.jpg",
            "./img/projects/crm-inmobiliaria-6.jpg"
        ],
        tags: ["CRM", "Software a medida", "Inmobiliaria", "Aplicación web"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "erp-intranet",
        title: "ERP empresarial / Intranet",
        description: "ERP empresarial en formato intranet para centralizar los procesos y la información interna de la empresa.",
        details: [
            "Desarrollo de un ERP empresarial en formato intranet, que reúne en una sola plataforma interna los procesos y la información que la empresa utiliza a diario.",
            "El acceso es solo para el personal de la organización, con control de usuarios y permisos según el rol de cada persona."
        ],
        highlights: [
            "Plataforma interna que centraliza los procesos de la empresa.",
            "Acceso restringido al personal, con control de usuarios y permisos.",
            "Módulos adaptados a las áreas y necesidades de la organización."
        ],
        role: "Desarrollo de software a medida",
        year: "2026",
        image: "./img/projects/erp-intranet-1.jpg",
        images: [
            "./img/projects/erp-intranet-1.jpg",
            "./img/projects/erp-intranet-2.jpg",
            "./img/projects/erp-intranet-3.jpg",
            "./img/projects/erp-intranet-4.jpg",
            "./img/projects/erp-intranet-5.jpg",
            "./img/projects/erp-intranet-6.jpg"
        ],
        tags: ["ERP", "Intranet", "Roles y permisos", "Aplicación web"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "control-de-obra",
        title: "Sistema de control de obra",
        description: "Sistema para llevar el control y el seguimiento de obras de construcción desde un solo lugar.",
        details: [
            "Desarrollo de un sistema de control de obra que permite llevar el seguimiento de los proyectos de construcción y tener la información de cada obra organizada y disponible para el equipo.",
            "Su objetivo es dar más orden y visibilidad sobre el avance de las obras, y reducir el control manual en hojas de cálculo o papel."
        ],
        highlights: [
            "Seguimiento del avance de cada obra.",
            "Información de las obras centralizada y accesible para el equipo.",
            "Menos control manual y más visibilidad para la toma de decisiones."
        ],
        role: "Desarrollo de software a medida",
        year: "2026",
        image: "./img/projects/control-de-obra-1.jpg",
        images: [
            "./img/projects/control-de-obra-1.jpg",
            "./img/projects/control-de-obra-2.jpg",
            "./img/projects/control-de-obra-3.jpg",
            "./img/projects/control-de-obra-4.jpg",
            "./img/projects/control-de-obra-5.jpg",
            "./img/projects/control-de-obra-6.jpg"
        ],
        tags: ["Control de obra", "Construcción", "Software a medida", "Aplicación web"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "whatsapp-wancon",
        title: "Plataforma de mensajería por WhatsApp (WANCON)",
        description: "Panel web para atender conversaciones de WhatsApp y enviar mensajes masivos con plantillas, integrado con Twilio.",
        details: [
            "Desarrollo de WANCON, una plataforma web para gestionar la comunicación con clientes por WhatsApp desde un solo panel: bandeja de conversaciones, envío de mensajes individuales y campañas de envío masivo.",
            "Se integra con Twilio para usar plantillas de WhatsApp aprobadas y llevar el control del estado de cada mensaje enviado."
        ],
        highlights: [
            "Bandeja de conversaciones con búsqueda y alerta de mensajes sin entregar.",
            "Envío masivo a partir de números pegados desde Excel o cargados por CSV/TXT.",
            "Plantillas de WhatsApp con variables personalizadas por destinatario.",
            "Campañas con nombre, agrupación de conversaciones y seguimiento del envío.",
            "Gestión de contactos e integración con Twilio."
        ],
        role: "Desarrollo full stack",
        year: "2026",
        image: "./img/projects/whatsapp-wancon-1.jpg",
        images: [
            "./img/projects/whatsapp-wancon-1.jpg",
            "./img/projects/whatsapp-wancon-2.jpg",
            "./img/projects/whatsapp-wancon-3.jpg",
            "./img/projects/whatsapp-wancon-4.jpg",
            "./img/projects/whatsapp-wancon-5.jpg"
        ],
        tags: ["WhatsApp", "Twilio", "Envío masivo", "Aplicación web"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "app-movil",
        title: "Aplicación móvil Android e iOS",
        description: "Aplicación móvil multiplataforma, publicada para Android e iOS desde una sola base de código.",
        details: [
            "Desarrollo de una aplicación móvil que funciona tanto en Android como en iOS, construida con Ionic para mantener una sola base de código y reducir tiempos y costos de desarrollo.",
            "Incluye la preparación de la aplicación para su publicación en las tiendas de aplicaciones."
        ],
        highlights: [
            "Una sola aplicación para Android e iOS.",
            "Desarrollo multiplataforma con Ionic.",
            "Preparada para su publicación en Google Play y App Store."
        ],
        role: "Desarrollo móvil",
        year: "2026",
        image: "./img/projects/app-movil-1.jpg",
        images: [
            "./img/projects/app-movil-1.jpg",
            "./img/projects/app-movil-2.jpg",
            "./img/projects/app-movil-3.jpg",
            "./img/projects/app-movil-4.jpg",
            "./img/projects/app-movil-5.jpg",
            "./img/projects/app-movil-6.jpg"
        ],
        tags: ["Ionic", "Android", "iOS", "App móvil"],
        private: false,
        demo: "",
        code: ""
    },
    {
        id: "aws-despliegue",
        title: "Configuración y despliegue en AWS",
        description: "Configuración de servidores en AWS y despliegue de aplicaciones, con servicios como Textract para leer documentos.",
        details: [
            "Configuración y despliegue de aplicaciones en servidores de AWS, dejando los entornos listos para producción de forma segura y ordenada.",
            "También integré servicios de AWS como Textract, para extraer texto y datos de documentos de forma automática y evitar la digitación manual."
        ],
        highlights: [
            "Configuración de servidores y entornos en AWS.",
            "Despliegue de aplicaciones listas para producción.",
            "Uso de Amazon Textract para extraer texto y datos de documentos.",
            "Integración de otros servicios de AWS según las necesidades del proyecto."
        ],
        role: "Infraestructura y despliegue",
        year: "2026",
        image: "./img/projects/aws-despliegue-1.jpg",
        images: [
            "./img/projects/aws-despliegue-1.jpg",
            "./img/projects/aws-despliegue-2.jpg",
            "./img/projects/aws-despliegue-3.jpg",
            "./img/projects/aws-despliegue-4.jpg"
        ],
        tags: ["AWS", "Textract", "Despliegue", "Servidores"],
        private: false,
        demo: "",
        code: ""
    },
    {
        id: "epmapse-gestion",
        title: "Sistema de gestión con roles y facturación – Epmapse",
        description: "Sistema web de administración interna con gestión de usuarios, roles de acceso y consulta de facturas.",
        details: [
            "Desarrollo de un sistema web para la administración interna de Epmapse, enfocado en la seguridad y la organización, que permite controlar los accesos según permisos definidos."
        ],
        highlights: [
            "Gestión de usuarios: crear, editar y eliminar.",
            "Visualización de facturas y datos asociados.",
            "Autenticación y autorización con roles personalizados (administrador, usuario, etc.)."
        ],
        role: "Desarrollo web y backend",
        year: "Ene 2025 – Mar 2025",
        platform: "Freelancer.com",
        image: "./img/projects/epmapse-gestion-1.jpg",
        images: [
            "./img/projects/epmapse-gestion-1.jpg",
            "./img/projects/epmapse-gestion-2.jpg",
            "./img/projects/epmapse-gestion-3.jpg",
            "./img/projects/epmapse-gestion-4.jpg"
        ],
        tags: ["Node.js", "Express.js", "Roles y permisos", "Autenticación"],
        private: true,
        demo: "",
        code: ""
    },
    {
        id: "epmapse-web",
        title: "Rediseño de la página web de Epmapse",
        description: "Nueva página institucional enfocada en usabilidad, accesibilidad y velocidad de carga.",
        details: [
            "Diseño e implementación de una nueva página institucional para Epmapse, enfocada en la usabilidad, accesibilidad y experiencia del usuario. El proyecto incluyó desde el diseño de la interfaz hasta la implementación completa en producción.",
            "Se optimizó la velocidad de carga y se mejoró la estructura del contenido para facilitar el acceso a la información clave de los servicios ofrecidos."
        ],
        role: "Diseño y desarrollo web",
        year: "Dic 2024 – Feb 2025",
        platform: "Freelancer.com",
        image: "./img/projects/epmapse-web-1.jpg",
        images: [
            "./img/projects/epmapse-web-1.jpg",
            "./img/projects/epmapse-web-2.jpg",
            "./img/projects/epmapse-web-3.jpg",
            "./img/projects/epmapse-web-4.jpg"
        ],
        tags: ["HTML5", "CSS", "Diseño responsive", "Accesibilidad"],
        private: false,
        demo: "",
        code: ""
    },
    {
        id: "chatapp",
        title: "Chatapp",
        description: "Aplicación web de chat desarrollada con Vue.js y Node.js.",
        details: [
            "Aplicación web de chat construida con Vue.js en el frontend y Node.js en el backend."
        ],
        role: "Desarrollo full stack",
        year: "Ene 2024 – Mar 2024",
        platform: "Upwork",
        image: "./img/projects/chatapp-1.jpg",
        images: [
            "./img/projects/chatapp-1.jpg",
            "./img/projects/chatapp-2.jpg",
            "./img/projects/chatapp-3.jpg",
            "./img/projects/chatapp-4.jpg",
            "./img/projects/chatapp-5.jpg"
        ],
        tags: ["Vue.js", "Node.js"],
        private: false,
        demo: "",
        code: ""
    },
    {
        id: "blog",
        title: "Blog",
        description: "Aplicación web de blog para explorar, aprender y compartir ideas.",
        details: [
            "Aplicación web de blog pensada para explorar, aprender y compartir ideas, con una experiencia de lectura y escritura cuidada.",
            "Desarrollada con JavaScript y Vue.js."
        ],
        role: "Desarrollo full stack",
        year: "Oct 2023 – Dic 2023",
        platform: "Freelancer.com",
        image: "./img/projects/blog-1.jpg",
        images: [
            "./img/projects/blog-1.jpg",
            "./img/projects/blog-2.jpg",
            "./img/projects/blog-3.jpg",
            "./img/projects/blog-4.jpg"
        ],
        tags: ["JavaScript", "Vue.js"],
        private: false,
        demo: "",
        code: ""
    },
    {
        id: "todolist",
        title: "TodoList – App web",
        description: "Aplicación web para el seguimiento de tareas.",
        details: [
            "Aplicación web construida para el seguimiento de tareas, desarrollada con JavaScript y CSS."
        ],
        role: "Desarrollo web",
        year: "Dic 2022 – May 2023",
        image: "./img/projects/todolist-1.jpg",
        images: [
            "./img/projects/todolist-1.jpg",
            "./img/projects/todolist-2.jpg",
            "./img/projects/todolist-3.jpg",
            "./img/projects/todolist-4.jpg"
        ],
        tags: ["JavaScript", "CSS"],
        private: false,
        demo: "",
        code: ""
    }
];

const PLACEHOLDER = "./img/projects/placeholder.svg";

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function link(href, label, className) {
    const a = el("a", className || "", label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
}

function projectUrl(p) {
    return `./proyecto.html?id=${encodeURIComponent(p.id)}`;
}

// Si una captura todavía no existe, se muestra la imagen de relleno.
function withFallback(img) {
    img.addEventListener("error", () => {
        if (!img.src.endsWith("placeholder.svg")) img.src = PLACEHOLDER;
    });
    return img;
}

// ---- Lista en la página principal ----
const grid = document.querySelector("#projects .project-grid");

if (grid) {
    projects.forEach(p => {
        const card = el("article", "project");

        const img = el("img");
        img.alt = `Captura de ${p.title}`;
        img.loading = "lazy";
        withFallback(img).src = p.image;

        const body = el("div", "project-body");
        // el enlace del título cubre toda la tarjeta (ver .project h4 a::after en el CSS)
        const title = el("h4");
        const titleLink = el("a", "project-title", p.title);
        titleLink.href = projectUrl(p);
        title.append(titleLink);
        body.append(title, el("p", "", p.description));

        const tags = el("ul", "tags");
        p.tags.forEach(t => tags.append(el("li", "", t)));
        body.append(tags);

        const links = el("div", "project-links");
        if (p.demo) links.append(link(p.demo, "Ver demo ↗"));
        if (p.code) links.append(link(p.code, "Código ↗"));
        if (links.children.length) body.append(links);
        else if (p.private) body.append(el("span", "private", "🔒 Proyecto confidencial"));

        card.append(img, body);
        grid.append(card);
    });
}

// ---- Página de detalle (proyecto.html) ----
const detail = document.querySelector("#project-detail");

if (detail) {
    const id = new URLSearchParams(location.search).get("id");
    const p = projects.find(item => item.id === id);

    if (!p) {
        document.title = "Proyecto no encontrado - Dany Mitte";
        detail.append(
            el("h1", "", "Proyecto no encontrado"),
            el("p", "lead", "Este proyecto no existe o fue movido.")
        );
    } else {
        document.title = `${p.title} - Dany Mitte`;

        detail.append(el("h1", "", p.title));
        detail.append(el("p", "lead", p.description));

        const meta = el("div", "meta");
        [["Rol", p.role], ["Periodo", p.year], ["Plataforma", p.platform]].forEach(([label, value]) => {
            if (!value) return;
            const item = el("div");
            item.append(el("span", "", label), el("strong", "", value));
            meta.append(item);
        });
        detail.append(meta);

        const tags = el("ul", "tags");
        p.tags.forEach(t => tags.append(el("li", "", t)));
        detail.append(tags);

        const links = el("div", "detail-links");
        if (p.demo) links.append(link(p.demo, "Ver demo ↗", "btn"));
        if (p.code) links.append(link(p.code, "Ver código ↗", "btn"));
        if (links.children.length) detail.append(links);
        else if (p.private) detail.append(el("span", "private", "🔒 Proyecto confidencial de empresa: no se puede compartir demo ni código."));

        const gallery = el("div", "gallery");
        (p.images && p.images.length ? p.images : [p.image]).forEach((src, i) => {
            const img = el("img");
            img.alt = `${p.title} - imagen ${i + 1}`;
            img.loading = "lazy";
            withFallback(img).src = src;
            gallery.append(img);
        });
        detail.append(gallery);

        const about = el("div", "about");
        about.append(el("h2", "", "Sobre el proyecto"));
        p.details.forEach(text => about.append(el("p", "", text)));
        if (p.highlights && p.highlights.length) {
            const list = el("ul", "highlights");
            p.highlights.forEach(h => list.append(el("li", "", h)));
            about.append(list);
        }
        detail.append(about);

        // navegación al siguiente proyecto
        const next = projects[(projects.indexOf(p) + 1) % projects.length];
        if (next !== p) {
            const nextLink = el("a", "next-project", `Siguiente: ${next.title} →`);
            nextLink.href = projectUrl(next);
            detail.append(nextLink);
        }
    }
}
