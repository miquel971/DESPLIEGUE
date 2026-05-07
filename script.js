const unidades = [
  {
    nombre: "UF1 - Servicios de red implicados en el despliegue",
    preguntas: [
      {
        texto: "¿Qué significa despliegue de una aplicación web?",
        correcta: "Trasladar la aplicación probada a producción instalando y configurando servicios",
        incorrectas: ["Borrar el proyecto y volver a programarlo", "Cambiar solamente el diseño visual"]
      },
      {
        texto: "¿Qué problema puede ocurrir si el despliegue no está automatizado?",
        correcta: "Errores humanos en dependencias o configuraciones",
        incorrectas: ["Se apaga automáticamente Internet", "El HTML deja de existir"]
      },
      {
        texto: "¿Dónde se ejecuta una aplicación web?",
        correcta: "Sobre uno o varios servidores web",
        incorrectas: ["Solo en el navegador y nunca en servidor", "Solo en una impresora de red"]
      },
      {
        texto: "¿Qué busca el escalado vertical?",
        correcta: "Aumentar RAM, CPU o disco de un único servidor",
        incorrectas: ["Añadir más usuarios al sistema", "Cambiar el dominio web"]
      },
      {
        texto: "¿Qué busca el escalado horizontal?",
        correcta: "Añadir más servidores iguales",
        incorrectas: ["Aumentar el tamaño del monitor", "Eliminar la base de datos"]
      },
      {
        texto: "¿Qué modelo aloja servidores y servicios dentro de las instalaciones de la empresa?",
        correcta: "Alojamiento interno o in-house",
        incorrectas: ["SaaS", "Hosting gratuito por defecto"]
      },
      {
        texto: "¿Qué servicio traduce nombres de dominio a direcciones IP?",
        correcta: "DNS",
        incorrectas: ["LDAP", "SSHFS"]
      },
      {
        texto: "¿Qué servicio puede centralizar la validación de usuarios con LDAP u OpenLDAP?",
        correcta: "Servicio de directorio activo",
        incorrectas: ["Servidor de impresión", "Servidor multimedia"]
      },
      {
        texto: "¿Qué protocolo se usa para conexión remota por terminal?",
        correcta: "SSH",
        incorrectas: ["JPEG", "HTML"]
      },
      {
        texto: "¿Qué opción en la nube deja al desarrollador centrarse en la aplicación y los datos?",
        correcta: "PaaS",
        incorrectas: ["IaaS", "In-house"]
      },
      {
        texto: "¿Qué opción en la nube da soporte a todos los niveles, incluso a la aplicación?",
        correcta: "SaaS",
        incorrectas: ["IaaS", "DNS"]
      },
      {
        texto: "¿Qué opción en la nube da más control sobre la infraestructura?",
        correcta: "IaaS",
        incorrectas: ["SaaS", "CMS"]
      },
      {
        texto: "¿Qué empresa lanzó EC2 y S3 en 2006 impulsando la computación en la nube?",
        correcta: "Amazon Web Services",
        incorrectas: ["Mozilla", "Oracle Forms"]
      },
      {
        texto: "¿Qué significa DNS?",
        correcta: "Domain Name System",
        incorrectas: ["Data Network Server", "Distributed Name Security"]
      },
      {
        texto: "¿Qué hace una resolución directa en DNS?",
        correcta: "Traduce nombre a IP",
        incorrectas: ["Traduce IP a nombre de usuario", "Cifra una web"]
      },
      {
        texto: "¿Qué hace una resolución inversa en DNS?",
        correcta: "Traduce IP a nombre",
        incorrectas: ["Traduce HTML a CSS", "Traduce usuario a contraseña"]
      },
      {
        texto: "¿Qué son las zonas primarias en DNS?",
        correcta: "Las zonas principales donde se mantiene la información original",
        incorrectas: ["Zonas solo de usuarios invitados", "Zonas de copia local del navegador"]
      },
      {
        texto: "¿Qué es LDAP?",
        correcta: "Un protocolo ligero de acceso a directorios",
        incorrectas: ["Un protocolo de vídeo", "Un lenguaje de maquetación"]
      },
      {
        texto: "¿Qué implementación libre de LDAP se menciona en la unidad?",
        correcta: "OpenLDAP",
        incorrectas: ["OpenDNS", "LibreProxy"]
      },
      {
        texto: "¿Qué formato se usa para intercambio de datos LDAP?",
        correcta: "LDIF",
        incorrectas: ["MP3", "RAR"]
      },
      {
        texto: "¿Qué tecnología de contenedores se menciona junto a Docker?",
        correcta: "LXC",
        incorrectas: ["BIOS", "POP3"]
      },
      {
        texto: "¿Qué es Docker Compose?",
        correcta: "Un orquestador para trabajar con contenedores",
        incorrectas: ["Un editor de imágenes", "Un gestor de dominios"]
      },
      {
        texto: "¿Qué representa una imagen en Docker?",
        correcta: "La plantilla a partir de la que se crea un contenedor",
        incorrectas: ["La captura de pantalla del servidor", "La copia de seguridad del navegador"]
      },
      {
        texto: "¿Qué representa un contenedor en Docker?",
        correcta: "La instancia en ejecución creada desde una imagen",
        incorrectas: ["Un archivo ZIP", "Una dirección IP pública"]
      },
      {
        texto: "¿Qué ventaja aporta la nube frente al in-house?",
        correcta: "Escalabilidad y menor inversión inicial",
        incorrectas: ["Elimina para siempre los errores", "No necesita Internet nunca"]
      },
      {
        texto: "¿Qué modelo une desarrollo y operaciones para trabajar con CI/CD?",
        correcta: "DevOps",
        incorrectas: ["FTP", "Bootstrap"]
      },
      {
        texto: "¿Qué significan las siglas CI/CD?",
        correcta: "Integración continua y distribución continua",
        incorrectas: ["Compilación interna y copia directa", "Control inmediato y conexión dual"]
      },
      {
        texto: "¿Qué servicio web de AWS se cita como virtualización de servidores a gran escala?",
        correcta: "EC2",
        incorrectas: ["S3", "IAM como sistema operativo"]
      },
      {
        texto: "¿Qué servicio de AWS se cita para almacenamiento masivo de objetos?",
        correcta: "S3",
        incorrectas: ["EC2", "RDP"]
      },
      {
        texto: "¿Qué se recomienda en el despliegue al final del proceso?",
        correcta: "Automatizar al máximo y revisar que todo funcione",
        incorrectas: ["No comprobar nada", "Cambiar todas las IP manualmente siempre"]
      }
    ]
  },

  {
    nombre: "UF2 - Servidores web",
    preguntas: [
      {
        texto: "¿Qué arquitectura básica usan habitualmente las aplicaciones web?",
        correcta: "Cliente-servidor",
        incorrectas: ["Solo peer to peer", "Solo local sin red"]
      },
      {
        texto: "¿Quién solicita la información en la arquitectura cliente-servidor?",
        correcta: "El cliente",
        incorrectas: ["El monitor", "La memoria RAM"]
      },
      {
        texto: "¿Quién sirve la información solicitada?",
        correcta: "El servidor",
        incorrectas: ["El teclado", "La GPU"]
      },
      {
        texto: "¿Qué suele usar el cliente para acceder a la información web?",
        correcta: "Un navegador web",
        incorrectas: ["Un compilador de C", "Un editor hexadecimal"]
      },
      {
        texto: "¿Qué modelo añade una base de datos al flujo entre cliente y servidor?",
        correcta: "Arquitectura de tres niveles",
        incorrectas: ["Modelo monousuario", "Red en anillo"]
      },
      {
        texto: "¿Qué hace el servidor de aplicaciones en la arquitectura de tres niveles?",
        correcta: "Consulta la base de datos y compone la respuesta",
        incorrectas: ["Apaga el cliente", "Sustituye la URL por una MAC"]
      },
      {
        texto: "¿Qué CMS se cita como ejemplo de arquitectura de tres niveles?",
        correcta: "WordPress",
        incorrectas: ["Paint", "Bloc de notas"]
      },
      {
        texto: "¿Qué es un proxy?",
        correcta: "Un intermediario entre cliente y servidor",
        incorrectas: ["Un antivirus de hardware", "Un tipo de dominio raíz"]
      },
      {
        texto: "¿Qué ventaja puede aportar un proxy?",
        correcta: "Cacheo de información para ahorrar tiempo y ancho de banda",
        incorrectas: ["Eliminar el protocolo HTTP", "Convertir CSS en Java"]
      },
      {
        texto: "¿Qué otra función puede tener un proxy?",
        correcta: "Filtrado de contenidos y control de acceso",
        incorrectas: ["Diseñar bases de datos", "Programar servlets"]
      },
      {
        texto: "¿Qué protocolo utiliza la World Wide Web?",
        correcta: "HTTP",
        incorrectas: ["FTP como único protocolo web", "JPEG"]
      },
      {
        texto: "¿En qué capa de TCP/IP trabaja HTTP?",
        correcta: "Capa de aplicación",
        incorrectas: ["Capa física", "Capa eléctrica"]
      },
      {
        texto: "¿Qué puerto usa HTTP por defecto?",
        correcta: "80/TCP",
        incorrectas: ["21/TCP", "443/UDP"]
      },
      {
        texto: "¿Quién escribió la primera aproximación a la World Wide Web?",
        correcta: "Tim Berners-Lee",
        incorrectas: ["Linus Torvalds", "Bill Gates"]
      },
      {
        texto: "¿Qué tres componentes fundamentales estableció la Web inicial?",
        correcta: "URL, HTTP y HTML",
        incorrectas: ["CSS, Java y PNG", "SQL, BIOS y SMTP"]
      },
      {
        texto: "¿Qué versión se indica en el material como versión actual de HTTP?",
        correcta: "HTTP/2",
        incorrectas: ["HTTP/0.9", "HTTP/1.0"]
      },
      {
        texto: "¿Qué mejora introducen las conexiones persistentes desde HTTP/1.1?",
        correcta: "Permiten varias comunicaciones HTTP sobre una misma conexión TCP",
        incorrectas: ["Eliminan el servidor", "Obligan a usar FTP"]
      },
      {
        texto: "¿Qué añade HTTP/2 sobre la conexión?",
        correcta: "Multiplexación de mensajes HTTP",
        incorrectas: ["Solo texto plano", "Exclusivamente conexiones breves"]
      },
      {
        texto: "¿Qué significa que HTTP sea un protocolo sin estado?",
        correcta: "No guarda por sí mismo información entre peticiones",
        incorrectas: ["No puede enviar respuestas", "No usa URLs"]
      },
      {
        texto: "¿Qué técnica se menciona para seguir la sesión del usuario?",
        correcta: "Cookies",
        incorrectas: ["Pantallazos", "Capturas DNS"]
      },
      {
        texto: "¿Qué tipo de autenticación envía usuario y contraseña al servidor?",
        correcta: "Basic",
        incorrectas: ["Visual", "Canvas"]
      },
      {
        texto: "¿Cuándo debe usarse HTTPS si se usa autenticación Basic insegura?",
        correcta: "Cuando la contraseña se transmite de forma insegura",
        incorrectas: ["Solo en redes WiFi públicas", "Nunca hace falta"]
      },
      {
        texto: "¿Qué añade HTTPS respecto a HTTP?",
        correcta: "Cifrado y seguridad en la comunicación",
        incorrectas: ["Cambio del lenguaje HTML", "Acceso automático a bases de datos"]
      },
      {
        texto: "¿Qué infraestructura se menciona en HTTPS para certificados y claves?",
        correcta: "PKI",
        incorrectas: ["CMS", "LXC"]
      },
      {
        texto: "¿Qué protocolo protege normalmente HTTPS?",
        correcta: "TLS",
        incorrectas: ["POP3", "TFTP"]
      },
      {
        texto: "¿Qué son los hosts virtuales basados en nombres?",
        correcta: "Varios sitios en un servidor diferenciados por nombre de dominio",
        incorrectas: ["Usuarios invitados del sistema", "Copias de seguridad del DNS"]
      },
      {
        texto: "¿Qué son los hosts virtuales basados en puertos?",
        correcta: "Varios sitios diferenciados por puerto",
        incorrectas: ["Usuarios distintos por navegador", "Distintas IP del cliente obligatorias siempre"]
      },
      {
        texto: "¿Qué significa LAMP?",
        correcta: "Linux, Apache, MySQL y PHP",
        incorrectas: ["Linux, ASP, MariaDB y Perl", "Libre Apache Modular Program"]
      },
      {
        texto: "¿Qué significa WISA?",
        correcta: "Windows, IIS, SQL Server y ASP",
        incorrectas: ["Web Internet Server Access", "Windows, Internet, Samba y Apache"]
      },
      {
        texto: "¿Qué servidor web aparece en la pila LAMP?",
        correcta: "Apache",
        incorrectas: ["Tomcat", "vsftpd"]
      }
    ]
  },

  {
    nombre: "UF3 - Servidores de aplicaciones",
    preguntas: [
      {
        texto: "¿Qué aportan los servidores de aplicaciones además de ejecutar aplicaciones web?",
        correcta: "Ofrecen una interfaz entre usuario y lógica de negocio",
        incorrectas: ["Sustituyen a Internet", "Eliminan la base de datos siempre"]
      },
      {
        texto: "¿Qué ventaja tienen frente a un modelo descentralizado?",
        correcta: "Centralización de datos y facilidad de actualización",
        incorrectas: ["No necesitan seguridad", "No usan red"]
      },
      {
        texto: "¿Qué desventaja puede tener un servidor de aplicaciones?",
        correcta: "Si cae el servicio, los clientes no pueden trabajar",
        incorrectas: ["No admite usuarios", "No puede ejecutar código"]
      },
      {
        texto: "¿Qué técnica se recomienda para evitar saturación del servidor?",
        correcta: "Balanceo de carga",
        incorrectas: ["Borrar sesiones", "Desactivar la red"]
      },
      {
        texto: "¿Qué lenguaje se destaca como muy común en servidores de aplicaciones?",
        correcta: "Java",
        incorrectas: ["Pascal puro como estándar único", "CSS"]
      },
      {
        texto: "¿Qué genera Java al compilar?",
        correcta: "Bytecode",
        incorrectas: ["Código máquina nativo siempre", "Solo archivos HTML"]
      },
      {
        texto: "¿Qué necesita el bytecode para ejecutarse?",
        correcta: "La JVM",
        incorrectas: ["Un navegador con FTP", "Un servidor DNS"]
      },
      {
        texto: "¿Qué ventaja da Java al compilar a bytecode?",
        correcta: "Compilar una vez y ejecutar en sistemas con JVM",
        incorrectas: ["No necesita compilar nunca", "Solo funciona en Linux"]
      },
      {
        texto: "¿Qué significa Java SE?",
        correcta: "Java Standard Edition",
        incorrectas: ["Java Server Edition", "Java Simple Engine"]
      },
      {
        texto: "¿Qué versión abierta principal se menciona para Java SE?",
        correcta: "OpenJDK",
        incorrectas: ["OpenByte", "JDK-Lite HTML"]
      },
      {
        texto: "¿Qué significa Java ME?",
        correcta: "Java Micro Edition",
        incorrectas: ["Java Main Edition", "Java Modern Engine"]
      },
      {
        texto: "¿Qué significa Java EE?",
        correcta: "Java Enterprise Edition",
        incorrectas: ["Java Extended Edition", "Java External Engine"]
      },
      {
        texto: "¿Bajo qué nombre continuó Java EE en Eclipse Foundation?",
        correcta: "Jakarta EE",
        incorrectas: ["MediaWiki EE", "OpenServlet"]
      },
      {
        texto: "¿Cuál es la primera capa lógica mencionada en la arquitectura Java?",
        correcta: "Capa de cliente",
        incorrectas: ["Capa física", "Capa de impresión"]
      },
      {
        texto: "¿Qué hace la capa de presentación?",
        correcta: "Procesa peticiones y prepara respuestas legibles para el cliente",
        incorrectas: ["Monta discos duros", "Gestiona el teclado del usuario"]
      },
      {
        texto: "¿Qué elementos suelen componer la capa de presentación?",
        correcta: "Servlets y JSP",
        incorrectas: ["BIOS y UEFI", "FTP y POP3"]
      },
      {
        texto: "¿Qué hace la capa de servicios de negocio?",
        correcta: "Realiza las funciones principales de la aplicación",
        incorrectas: ["Solo dibuja la interfaz", "Solo almacena certificados"]
      },
      {
        texto: "¿Qué proporciona la capa de datos?",
        correcta: "Acceso a información almacenada en bases de datos o directorios",
        incorrectas: ["Acceso al ratón y altavoces", "Solo acceso a hojas de estilo"]
      },
      {
        texto: "¿Qué define Jakarta Servlet?",
        correcta: "La API para gestionar peticiones y respuestas HTTP",
        incorrectas: ["El diseño del sistema operativo", "La resolución DNS inversa"]
      },
      {
        texto: "¿Qué define Jakarta Server Pages?",
        correcta: "Un motor para aplicaciones web",
        incorrectas: ["Un antivirus corporativo", "Un compilador de C"]
      },
      {
        texto: "¿Qué define Jakarta Authentication?",
        correcta: "Mecanismos de autenticación",
        incorrectas: ["Montaje de discos remotos", "Tipos MIME"]
      },
      {
        texto: "¿Qué define Jakarta WebSocket?",
        correcta: "Uso de websockets en cliente y servidor",
        incorrectas: ["Configuración de impresoras", "Gestión de ramas Git"]
      },
      {
        texto: "¿Es Apache Tomcat un servidor de aplicaciones completo según el temario?",
        correcta: "No, es un servidor de servlets",
        incorrectas: ["Sí, cumple todo Jakarta EE siempre", "No, porque solo sirve FTP"]
      },
      {
        texto: "¿Qué puede manejar Tomcat correctamente?",
        correcta: "Servlets y JSP",
        incorrectas: ["Solo imágenes PNG", "Solo conexiones SSH"]
      },
      {
        texto: "¿Qué producto de Apache sí aparece como servidor de aplicaciones completo?",
        correcta: "Apache TomEE",
        incorrectas: ["Apache FTPD", "Apache Nano"]
      },
      {
        texto: "¿Qué sabor añade microservicios en TomEE?",
        correcta: "Apache TomEE MicroProfile",
        incorrectas: ["Apache TomEE DNS", "Apache TomEE Proxy"]
      },
      {
        texto: "¿Qué sabor añade persistencia de datos y servicios web?",
        correcta: "Apache TomEE WebProfile",
        incorrectas: ["Apache TomEE HTML", "Apache TomEE Kernel"]
      },
      {
        texto: "¿Qué directorio de Tomcat se menciona para aplicaciones desplegadas?",
        correcta: "/webapps",
        incorrectas: ["/passwd", "/tmphtml"]
      },
      {
        texto: "¿Qué puerto se menciona para comprobar Tomcat en navegador en el caso práctico?",
        correcta: "8080",
        incorrectas: ["3306", "25"]
      },
      {
        texto: "¿Qué pasos previos aparecen en la instalación de Tomcat?",
        correcta: "Instalar JDK y crear usuario y grupo tomcat",
        incorrectas: ["Instalar Word y crear una impresora", "Crear una VPN y un dominio obligatorio"]
      }
    ]
  },

  {
    nombre: "UF4 - Transferencia de archivos",
    preguntas: [
      {
        texto: "¿Qué modelo se usa normalmente en transferencia remota de archivos?",
        correcta: "Cliente-servidor",
        incorrectas: ["Solo local sin servidor", "Modelo exclusivamente offline"]
      },
      {
        texto: "¿Qué elementos básicos intervienen en este tipo de almacenamiento?",
        correcta: "Cliente, servidor, protocolo y sistema de archivos",
        incorrectas: ["Solo monitor y teclado", "Solo navegador y DNS"]
      },
      {
        texto: "¿Qué significa FTP?",
        correcta: "File Transfer Protocol",
        incorrectas: ["Fast Transfer Program", "File Transport Page"]
      },
      {
        texto: "¿Qué significa SFTP?",
        correcta: "SSH File Transfer Protocol",
        incorrectas: ["Secure File Text Protocol", "Server FTP"]
      },
      {
        texto: "¿Qué programa se cita como cliente y servidor compatible con FTP, FTPS y SFTP?",
        correcta: "FileZilla",
        incorrectas: ["Tomcat", "MediaWiki"]
      },
      {
        texto: "¿Qué gestor de archivos se menciona como capaz de trabajar con varios protocolos remotos?",
        correcta: "Nautilus",
        incorrectas: ["WordPad", "Bloc de notas"]
      },
      {
        texto: "¿Cuál fue el propósito original de FTP?",
        correcta: "Transferir datos entre ordenadores de forma eficiente y fiable",
        incorrectas: ["Diseñar páginas HTML", "Compilar programas Java"]
      },
      {
        texto: "¿Qué permite SFTP además de transferencia remota?",
        correcta: "Implementar también un sistema de archivos remoto",
        incorrectas: ["Servir páginas JSP", "Reemplazar DNS"]
      },
      {
        texto: "¿SFTP cifra por sí mismo según el material?",
        correcta: "No, asume que trabaja sobre un canal seguro como SSH",
        incorrectas: ["Sí, sin depender de nada más", "Solo en redes locales"]
      },
      {
        texto: "¿Qué servidor FTP de código abierto se usa en el caso práctico?",
        correcta: "vsftpd",
        incorrectas: ["Apache TomEE", "OpenLDAP"]
      },
      {
        texto: "¿Qué comando se usa en Ubuntu para instalar vsftpd en el ejemplo?",
        correcta: "sudo apt-get install vsftpd",
        incorrectas: ["git install vsftpd", "java -install vsftpd"]
      },
      {
        texto: "¿Qué puertos hay que permitir si el cortafuegos está activo en el ejemplo FTP?",
        correcta: "20 y 21 TCP",
        incorrectas: ["80 y 443 TCP", "22 y 23 UDP"]
      },
      {
        texto: "¿Qué directorio se crea como raíz para acceso anónimo en el ejemplo?",
        correcta: "/var/ftp",
        incorrectas: ["/home/root/ftp", "/srv/html"]
      },
      {
        texto: "¿Qué parámetro se cambia a YES para permitir acceso anónimo en vsftpd?",
        correcta: "anonymous_enable",
        incorrectas: ["jdk_enable", "mysql_enable"]
      },
      {
        texto: "¿Qué puerto usa FTP por defecto para la conexión de control?",
        correcta: "21",
        incorrectas: ["20", "443"]
      },
      {
        texto: "¿Qué puerto usa FTP por defecto para la conexión de datos?",
        correcta: "20",
        incorrectas: ["21", "22"]
      },
      {
        texto: "¿Cuántas conexiones necesita FTP para funcionar?",
        correcta: "Dos: control y datos",
        incorrectas: ["Una sola siempre", "Tres obligatorias"]
      },
      {
        texto: "¿Qué viaja por la conexión de control?",
        correcta: "Órdenes FTP y respuestas",
        incorrectas: ["Solo archivos binarios", "Solo imágenes"]
      },
      {
        texto: "¿Qué viaja por la conexión de datos?",
        correcta: "Los archivos transferidos",
        incorrectas: ["Solo contraseñas", "Solo logs del sistema"]
      },
      {
        texto: "¿Quién inicia la conexión de control en modo activo?",
        correcta: "El cliente",
        incorrectas: ["El servidor siempre", "El cortafuegos"]
      },
      {
        texto: "¿Quién establece la conexión de datos en modo activo?",
        correcta: "El servidor",
        incorrectas: ["El cliente", "El router"]
      },
      {
        texto: "¿Qué problema puede dar el modo activo con firewalls?",
        correcta: "Necesita permitir conexiones entrantes hacia el cliente",
        incorrectas: ["Rompe el sistema de archivos", "Impide el uso de ASCII"]
      },
      {
        texto: "¿Quién inicia tanto la conexión de control como la de datos en modo pasivo?",
        correcta: "El cliente",
        incorrectas: ["El servidor", "La base de datos"]
      },
      {
        texto: "¿Qué ventaja tiene el modo pasivo para el cliente?",
        correcta: "No necesita aceptar conexiones entrantes",
        incorrectas: ["No usa puertos", "No necesita autenticación nunca"]
      },
      {
        texto: "¿Qué dos tipos de datos puede transferir FTP?",
        correcta: "ASCII y binario",
        incorrectas: ["HTML y CSS", "JPG y PNG solamente"]
      },
      {
        texto: "¿Qué dos tipos de acceso aparecen en el mapa conceptual de FTP?",
        correcta: "Anónimo y autorizado",
        incorrectas: ["Local y remoto", "Público y kernel"]
      },
      {
        texto: "¿Qué ruta se usa en el explorador para acceder al servidor FTP en el ejemplo?",
        correcta: "ftp://IP_servidor",
        incorrectas: ["http://IP_servidor/ftp", "ssh://ftp_servidor"]
      },
      {
        texto: "¿Qué protocolo seguro suele acompañar a SFTP en OpenSSH?",
        correcta: "SSH",
        incorrectas: ["HTTP", "DNS"]
      },
      {
        texto: "¿Qué sistema de archivos remoto se menciona en la unidad junto a SFTP?",
        correcta: "SSHFS",
        incorrectas: ["NTFS", "FAT32"]
      },
      {
        texto: "¿Qué comprobación final se hace en el ejemplo de FTP anónimo?",
        correcta: "Ver que se accede y aparece el archivo pruebas.txt",
        incorrectas: ["Comprobar que Tomcat arranca", "Revisar el token de GitHub"]
      }
    ]
  },

  {
    nombre: "UF5 - Documentación y control de versiones",
    preguntas: [
      {
        texto: "¿Qué ayuda a desarrollar software de mejor calidad y de forma más eficiente?",
        correcta: "El ciclo de vida del software",
        incorrectas: ["El borrado de versiones", "La ausencia de documentación"]
      },
      {
        texto: "¿Qué recoge la documentación de un proyecto de software?",
        correcta: "La información relevante de sus distintas fases",
        incorrectas: ["Solo contraseñas", "Solo el nombre del proyecto"]
      },
      {
        texto: "¿Qué tipo de manual se cita para el despliegue del programa?",
        correcta: "Manual de instalación",
        incorrectas: ["Manual de dibujo", "Manual de tipografías"]
      },
      {
        texto: "¿Qué tipo de manual se cita para la explotación por parte del usuario?",
        correcta: "Manual de usuario",
        incorrectas: ["Manual de BIOS", "Manual de DNS"]
      },
      {
        texto: "¿Qué puede evitar un documento de requerimientos consensuado con el cliente?",
        correcta: "Malentendidos sobre si el producto cumple lo pactado",
        incorrectas: ["Errores del compilador Java", "La existencia de ramas Git"]
      },
      {
        texto: "¿Qué facilita la documentación interna a los desarrolladores?",
        correcta: "Modificar y mantener mejor el proyecto",
        incorrectas: ["Eliminar la red", "Sustituir la base de datos por texto plano"]
      },
      {
        texto: "¿Qué permite un buen manual de usuario o de administración?",
        correcta: "Mayor autonomía y menos consultas",
        incorrectas: ["Más conflictos Git", "Eliminar permisos del sistema"]
      },
      {
        texto: "¿Qué razón se menciona para que muchas veces no se documente?",
        correcta: "La falta de tiempo por plazos ajustados",
        incorrectas: ["Exceso de copias de seguridad", "Uso obligatorio de Java"]
      },
      {
        texto: "¿Qué debe incluir un documento para localizar rápido la información?",
        correcta: "Un índice",
        incorrectas: ["Solo una portada", "Un token de acceso"]
      },
      {
        texto: "¿Qué conviene definir para lograr documentación homogénea?",
        correcta: "Un estándar con plantillas",
        incorrectas: ["Un solo color de fondo", "Una sola contraseña para todos"]
      },
      {
        texto: "¿Qué debe acompañar al texto, sobre todo si va dirigido al usuario final?",
        correcta: "Esquemas y capturas de pantalla",
        incorrectas: ["Solo fórmulas matemáticas", "Solo comandos Git avanzados"]
      },
      {
        texto: "¿Qué debe indicarse claramente en la documentación?",
        correcta: "Fecha de edición y versión del programa",
        incorrectas: ["La marca del portátil", "La velocidad de Internet"]
      },
      {
        texto: "¿Qué es importante hacer con la vigencia de los documentos?",
        correcta: "Revisarla para adaptarlos o retirarlos",
        incorrectas: ["Ignorarla siempre", "Duplicarlos sin control"]
      },
      {
        texto: "¿Qué debe ser la documentación una vez creada?",
        correcta: "Fácilmente accesible",
        incorrectas: ["Privada para todos los usuarios siempre", "Ineditable por definición"]
      },
      {
        texto: "¿Qué permite el control de versiones durante desarrollo y mantenimiento?",
        correcta: "Llevar un control ordenado de cambios y versiones",
        incorrectas: ["Evitar escribir código", "Sustituir la documentación"]
      },
      {
        texto: "¿Qué ventaja da un sistema de control de versiones?",
        correcta: "Poder volver rápido a estados anteriores",
        incorrectas: ["Eliminar los commits", "No tener repositorio"]
      },
      {
        texto: "¿Qué otra ventaja se menciona?",
        correcta: "Trazabilidad de los cambios",
        incorrectas: ["Eliminar ramas automáticamente siempre", "No usar usuarios"]
      },
      {
        texto: "¿Qué es un repositorio?",
        correcta: "El espacio donde se guardan archivos del proyecto y metadatos",
        incorrectas: ["Una carpeta temporal del navegador", "Un editor de texto"]
      },
      {
        texto: "¿Qué es un conflicto en control de versiones?",
        correcta: "Un choque entre cambios sobre el mismo archivo",
        incorrectas: ["Un fallo del teclado", "Un error exclusivo de Linux"]
      },
      {
        texto: "¿Qué permite una rama?",
        correcta: "Trabajar en paralelo sobre distintos flujos del proyecto",
        incorrectas: ["Borrar el historial completo", "Desactivar el repositorio remoto"]
      },
      {
        texto: "¿Qué sistema de control de versiones se desarrolla principalmente en la unidad?",
        correcta: "Git",
        incorrectas: ["SVN solamente", "FTP"]
      },
      {
        texto: "¿Qué modelo usa Git?",
        correcta: "Distribuido",
        incorrectas: ["Solo centralizado", "Sin repositorio"]
      },
      {
        texto: "¿Qué tres áreas de trabajo usa Git?",
        correcta: "Directorio de trabajo, área de preparación y repositorio",
        incorrectas: ["Compilación, red y kernel", "HTML, CSS y JS"]
      },
      {
        texto: "¿Qué comando crea un repositorio Git vacío?",
        correcta: "git init",
        incorrectas: ["git start", "git new"]
      },
      {
        texto: "¿Qué comando añade cambios al área de preparación?",
        correcta: "git add",
        incorrectas: ["git make", "git send"]
      },
      {
        texto: "¿Qué comando confirma cambios en el repositorio?",
        correcta: "git commit",
        incorrectas: ["git saveall", "git upload"]
      },
      {
        texto: "¿Qué comando muestra el estado del repositorio?",
        correcta: "git status",
        incorrectas: ["git ping", "git html"]
      },
      {
        texto: "¿Qué comando muestra el historial de confirmaciones?",
        correcta: "git log",
        incorrectas: ["git listall", "git version"]
      },
      {
        texto: "¿Qué plataforma se menciona para desarrollo colaborativo y repositorios remotos?",
        correcta: "GitHub",
        incorrectas: ["Javadoc", "MediaWiki como sistema de commits"]
      },
      {
        texto: "¿Qué herramienta de GitHub se menciona para automatizar acciones y pruebas?",
        correcta: "GitHub Actions",
        incorrectas: ["GitHub Paint", "GitHub BIOS"]
      }
    ]
  }
];

const panelQuiz = document.getElementById("panelQuiz");
const panelResultado = document.getElementById("panelResultado");

const infoUnidad = document.getElementById("infoUnidad");
const infoPregunta = document.getElementById("infoPregunta");
const infoAciertos = document.getElementById("infoAciertos");
const infoTotal = document.getElementById("infoTotal");
const infoBanco = document.getElementById("infoBanco");

const textoPregunta = document.getElementById("textoPregunta");
const cajaRespuestas = document.getElementById("cajaRespuestas");
const mensaje = document.getElementById("mensaje");

const resultadoUnidad = document.getElementById("resultadoUnidad");
const resultadoAciertos = document.getElementById("resultadoAciertos");
const resultadoTotal = document.getElementById("resultadoTotal");
const resultadoNota = document.getElementById("resultadoNota");

const btnVolver = document.getElementById("btnVolver");

const TOTAL_PREGUNTAS_TEST = 30;

let quizActual = [];
let aciertos = 0;
let respondidas = 0;
let ultimaPosicionCorrecta = -1;

function mezclarArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function obtenerTotalBanco() {
  return unidades.reduce((total, unidad) => {
    return total + unidad.preguntas.length;
  }, 0);
}

function seleccionarPreguntasDelTest() {
  const todasLasPreguntas = [];

  unidades.forEach((unidad) => {
    unidad.preguntas.forEach((pregunta) => {
      todasLasPreguntas.push({
        ...pregunta,
        unidadNombre: unidad.nombre
      });
    });
  });

  return mezclarArray(todasLasPreguntas).slice(0, TOTAL_PREGUNTAS_TEST);
}

function generarOpcionesSinRepetirPosicion(pregunta) {
  const respuestasBase = [
    { texto: pregunta.correcta, esCorrecta: true },
    { texto: pregunta.incorrectas[0], esCorrecta: false },
    { texto: pregunta.incorrectas[1], esCorrecta: false }
  ];

  let opcionesMezcladas;
  let posicionCorrecta;

  do {
    opcionesMezcladas = mezclarArray(respuestasBase);
    posicionCorrecta = opcionesMezcladas.findIndex(opcion => opcion.esCorrecta);
  } while (posicionCorrecta === ultimaPosicionCorrecta);

  ultimaPosicionCorrecta = posicionCorrecta;

  return opcionesMezcladas;
}

function mostrarPanel(nombre) {
  panelQuiz.classList.remove("activo");
  panelResultado.classList.remove("activo");

  if (nombre === "quiz") {
    panelQuiz.classList.add("activo");
  }

  if (nombre === "resultado") {
    panelResultado.classList.add("activo");
  }
}

function empezarQuiz() {
  quizActual = seleccionarPreguntasDelTest();

  aciertos = 0;
  respondidas = 0;
  ultimaPosicionCorrecta = -1;

  mensaje.textContent = "";
  mensaje.className = "mensaje";

  mostrarPanel("quiz");
  renderizarPregunta();
}

function renderizarPregunta() {
  if (respondidas >= TOTAL_PREGUNTAS_TEST || quizActual.length === 0) {
    mostrarResultado();
    return;
  }

  const preguntaActual = quizActual[0];
  const opciones = generarOpcionesSinRepetirPosicion(preguntaActual);

  infoUnidad.textContent = preguntaActual.unidadNombre;
  infoPregunta.textContent = `Pregunta ${respondidas + 1} / ${TOTAL_PREGUNTAS_TEST}`;
  infoAciertos.textContent = aciertos;
  infoTotal.textContent = TOTAL_PREGUNTAS_TEST;

  if (infoBanco) {
    infoBanco.textContent = obtenerTotalBanco();
  }

  textoPregunta.textContent = preguntaActual.texto;

  cajaRespuestas.innerHTML = "";
  mensaje.textContent = "";
  mensaje.className = "mensaje";

  opciones.forEach((opcion) => {
    const boton = document.createElement("button");

    boton.type = "button";
    boton.className = "respuesta";
    boton.textContent = opcion.texto;
    boton.dataset.correcta = opcion.esCorrecta ? "si" : "no";

    boton.addEventListener("click", () => {
      comprobarRespuesta(boton, opcion.esCorrecta);
    });

    cajaRespuestas.appendChild(boton);
  });
}

function comprobarRespuesta(botonPulsado, esCorrecta) {
  const botones = cajaRespuestas.querySelectorAll("button");

  botones.forEach((boton) => {
    boton.disabled = true;
  });

  if (esCorrecta) {
    aciertos++;
    botonPulsado.classList.add("correcta");
    mensaje.textContent = "Correcta.";
    mensaje.className = "mensaje ok";
  } else {
    botonPulsado.classList.add("incorrecta");

    let respuestaCorrectaTexto = "";

    botones.forEach((boton) => {
      if (boton.dataset.correcta === "si") {
        boton.classList.add("correcta");
        respuestaCorrectaTexto = boton.textContent;
      }
    });

    mensaje.textContent = `Incorrecta. La correcta es: ${respuestaCorrectaTexto}`;
    mensaje.className = "mensaje error";
  }

  respondidas++;
  quizActual.shift();

  setTimeout(() => {
    if (respondidas >= TOTAL_PREGUNTAS_TEST || quizActual.length === 0) {
      mostrarResultado();
    } else {
      renderizarPregunta();
    }
  }, 1000);
}

function mostrarResultado() {
  const total = TOTAL_PREGUNTAS_TEST;
  const nota = ((aciertos / total) * 10).toFixed(2);

  resultadoUnidad.textContent = "Test completado";
  resultadoAciertos.textContent = aciertos;
  resultadoTotal.textContent = total;
  resultadoNota.textContent = nota;

  mostrarPanel("resultado");
}

btnVolver.addEventListener("click", () => {
  empezarQuiz();
});

document.addEventListener("DOMContentLoaded", () => {
  empezarQuiz();
});