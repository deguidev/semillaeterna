import type { SidebarConfig } from '@/types/sidebar';

/**
 * Configuración del sidebar para la sección de Prédicas
 */
export const sidebarEnsenanzasPracticas: SidebarConfig = {
    label: 'Enseñanzas Prácticas',
    items: [
        {
            label: 'Vida Espiritual',
            collapsed: true,
            items: [
                { label: 'La oración que transforma', slug: 'ensenanzas-practicas/vida-espiritual/oracion-que-transforma' },
                { label: 'El poder del ayuno', slug: 'ensenanzas-practicas/vida-espiritual/poder-del-ayuno' },
                { label: 'Cómo tener comunión con Dios', slug: 'ensenanzas-practicas/vida-espiritual/comunion-con-dios' },
                { label: 'El silencio de Dios y la fe', slug: 'ensenanzas-practicas/vida-espiritual/silencio-de-dios-y-fe' },
                { label: 'Cómo oír la voz del Espíritu Santo', slug: 'ensenanzas-practicas/vida-espiritual/oir-voz-espiritu-santo' },
                { label: 'El alma, el cuerpo y el espíritu', slug: 'ensenanzas-practicas/vida-espiritual/alma-cuerpo-espiritu' },
                { label: 'Cómo vencer las tentaciones', slug: 'ensenanzas-practicas/vida-espiritual/vencer-tentaciones' },
                { label: 'La llenura del Espíritu Santo en la vida diaria', slug: 'ensenanzas-practicas/vida-espiritual/llenura-espiritu-santo' },
                { label: 'El fuego del altar personal', slug: 'ensenanzas-practicas/vida-espiritual/fuego-del-altar' },
                { label: 'Cómo mantener una vida devocional constante', slug: 'ensenanzas-practicas/vida-espiritual/vida-devocional-constante' },
                { label: 'La obediencia como muestra de amor a Dios', slug: 'ensenanzas-practicas/vida-espiritual/obediencia-amor-dios' },
                { label: 'Cómo discernir la voluntad de Dios', slug: 'ensenanzas-practicas/vida-espiritual/discernir-voluntad-dios' },
            ]
        },
        {
            label: 'Vida Interior y Emocional',
            collapsed: true,
            items: [
                { label: 'El miedo y la fe en Cristo', slug: 'ensenanzas-practicas/vida-interior/miedo-y-fe' },
                { label: 'Venciendo las preocupaciones diarias', slug: 'ensenanzas-practicas/vida-interior/vencer-preocupaciones' },
                { label: 'La ansiedad y la confianza en Dios', slug: 'ensenanzas-practicas/vida-interior/ansiedad-y-confianza' },
                { label: 'La tristeza y el gozo del Señor', slug: 'ensenanzas-practicas/vida-interior/tristeza-y-gozo' },
                { label: 'La culpa y el perdón divino', slug: 'ensenanzas-practicas/vida-interior/culpa-y-perdon' },
                { label: 'El enojo y el dominio propio', slug: 'ensenanzas-practicas/vida-interior/enojo-y-dominio-propio' },
                { label: 'El resentimiento y la sanidad interior', slug: 'ensenanzas-practicas/vida-interior/resentimiento-y-sanidad' },
                { label: 'El rechazo y la aceptación en Cristo', slug: 'ensenanzas-practicas/vida-interior/rechazo-y-aceptacion' },
                { label: 'La depresión y la esperanza eterna', slug: 'ensenanzas-practicas/vida-interior/depresion-y-esperanza' },
                { label: 'Cómo sanar heridas del alma', slug: 'ensenanzas-practicas/vida-interior/sanar-heridas' },
                { label: 'El poder del perdón', slug: 'ensenanzas-practicas/vida-interior/poder-del-perdon' },
                { label: 'Vencer el desánimo espiritual', slug: 'ensenanzas-practicas/vida-interior/vencer-desanimo' },
                { label: 'La gratitud como estilo de vida', slug: 'ensenanzas-practicas/vida-interior/gratitud-estilo-vida' },
                { label: 'Renovando la mente con la Palabra', slug: 'ensenanzas-practicas/vida-interior/renovar-mente' },
                { label: 'El descanso espiritual en medio del estrés', slug: 'ensenanzas-practicas/vida-interior/descanso-espiritual' }
            ]
        },
        {
            label: 'Sabiduría y Conducta Cristiana',
            collapsed: true,
            items: [
                { label: 'La sabiduría que viene de lo alto', slug: 'ensenanzas-practicas/sabiduria/sabiduria-de-lo-alto' },
                { label: 'La prudencia en la toma de decisiones', slug: 'ensenanzas-practicas/sabiduria/prudencia-decisiones' },
                { label: 'La humildad frente al orgullo', slug: 'ensenanzas-practicas/sabiduria/humildad-vs-orgullo' },
                { label: 'Cómo vivir con integridad', slug: 'ensenanzas-practicas/sabiduria/vivir-con-integridad' },
                { label: 'El carácter de Cristo en nosotros', slug: 'ensenanzas-practicas/sabiduria/caracter-de-cristo' },
                { label: 'La paciencia en la prueba', slug: 'ensenanzas-practicas/sabiduria/paciencia-en-prueba' },
                { label: 'La obediencia en tiempos difíciles', slug: 'ensenanzas-practicas/sabiduria/obediencia-en-dificultades' },
                { label: 'La fe que vence al mundo', slug: 'ensenanzas-practicas/sabiduria/fe-que-vence' },
                { label: 'Cómo vivir sin murmurar', slug: 'ensenanzas-practicas/sabiduria/vivir-sin-murmurar' },
                { label: 'El valor de la fidelidad', slug: 'ensenanzas-practicas/sabiduria/valor-fidelidad' },
                { label: 'Ser ejemplo en palabra y conducta', slug: 'ensenanzas-practicas/sabiduria/ejemplo-palabra-conducta' },
                { label: 'El fruto del Espíritu como estilo de vida', slug: 'ensenanzas-practicas/sabiduria/fruto-espiritu-estilo-vida' }
            ]
        },
        {
            label: 'Vida de Relación y Comunión',
            collapsed: true,
            items: [
                { label: 'El amor fraternal en la Iglesia', slug: 'ensenanzas-practicas/relaciones/amor-fraternal' },
                { label: 'Cómo restaurar relaciones rotas', slug: 'ensenanzas-practicas/relaciones/restaurar-relaciones' },
                { label: 'La importancia de la unidad del cuerpo de Cristo', slug: 'ensenanzas-practicas/relaciones/unidad-cuerpo-cristo' },
                { label: 'La comunión de los santos', slug: 'ensenanzas-practicas/relaciones/comunion-santos' },
                { label: 'El matrimonio cristiano según la Biblia', slug: 'ensenanzas-practicas/relaciones/matrimonio-cristiano' },
                { label: 'La familia bajo la bendición de Dios', slug: 'ensenanzas-practicas/relaciones/familia-bendicion' },
                { label: 'La crianza de los hijos en la fe', slug: 'ensenanzas-practicas/relaciones/crianza-hijos-fe' },
                { label: 'La amistad cristiana y el compañerismo', slug: 'ensenanzas-practicas/relaciones/amistad-cristiana' },
                { label: 'El perdón como base de la convivencia', slug: 'ensenanzas-practicas/relaciones/perdon-convivencia' },
                { label: 'La lengua: poder de vida o de muerte', slug: 'ensenanzas-practicas/relaciones/lengua-poder' },
                { label: 'Cómo evitar divisiones y contiendas', slug: 'ensenanzas-practicas/relaciones/evitar-divisiones' },
                { label: 'La hospitalidad y el servicio al prójimo', slug: 'ensenanzas-practicas/relaciones/hospitalidad-servicio' }
            ]
        },
        {
            label: 'Vida de Misión y Propósito',
            collapsed: true,
            items: [
                { label: 'El llamado de Dios al servicio', slug: 'ensenanzas-practicas/mision/llamado-servicio' },
                { label: 'Descubriendo los dones espirituales', slug: 'ensenanzas-practicas/mision/dones-espirituales' },
                { label: 'Usando los talentos para la gloria de Dios', slug: 'ensenanzas-practicas/mision/talentos-para-dios' },
                { label: 'Cumpliendo la Gran Comisión', slug: 'ensenanzas-practicas/mision/gran-comision' },
                { label: 'La pasión por las almas', slug: 'ensenanzas-practicas/mision/pasion-almas' },
                { label: 'Cómo compartir el Evangelio con poder', slug: 'ensenanzas-practicas/mision/compartir-evangelio' },
                { label: 'El liderazgo cristiano con humildad', slug: 'ensenanzas-practicas/mision/liderazgo-cristiano' },
                { label: 'Perseverando en el ministerio', slug: 'ensenanzas-practicas/mision/perseverar-ministerio' },
                { label: 'La recompensa eterna del siervo fiel', slug: 'ensenanzas-practicas/mision/recompensa-siervo-fiel' },
                { label: 'Venciendo el desánimo en la obra de Dios', slug: 'ensenanzas-practicas/mision/vencer-desanimo-obra' },
                { label: 'La visión del Reino en el creyente', slug: 'ensenanzas-practicas/mision/vision-reino' },
                { label: 'El Espíritu Santo en la misión mundial', slug: 'ensenanzas-practicas/mision/espiritu-santo-mision' }
            ]
        },
        {
            label: 'Vida de Fe y Victoria Espiritual',
            collapsed: true,
            items: [
                { label: 'Cómo vivir por fe y no por vista', slug: 'ensenanzas-practicas/fe-victoria/vivir-por-fe' },
                { label: 'Venciendo las pruebas con esperanza', slug: 'ensenanzas-practicas/fe-victoria/vencer-pruebas' },
                { label: 'La armadura de Dios en la batalla diaria', slug: 'ensenanzas-practicas/fe-victoria/armadura-de-dios' },
                { label: 'El poder de la confesión positiva', slug: 'ensenanzas-practicas/fe-victoria/confesion-positiva' },
                { label: 'Cómo resistir al enemigo', slug: 'ensenanzas-practicas/fe-victoria/resistir-enemigo' },
                { label: 'La victoria a través de la alabanza', slug: 'ensenanzas-practicas/fe-victoria/victoria-alabanza' },
                { label: 'El ayuno como arma espiritual', slug: 'ensenanzas-practicas/fe-victoria/ayuno-arma-espiritual' },
                { label: 'La oración de guerra espiritual', slug: 'ensenanzas-practicas/fe-victoria/oracion-guerra' },
                { label: 'Caminando en autoridad espiritual', slug: 'ensenanzas-practicas/fe-victoria/autoridad-espiritual' },
                { label: 'El nombre de Jesús y su poder', slug: 'ensenanzas-practicas/fe-victoria/nombre-de-jesus' },
                { label: 'La intercesión por la familia y la nación', slug: 'ensenanzas-practicas/fe-victoria/intercesion' },
                { label: 'Cómo mantener el fuego espiritual', slug: 'ensenanzas-practicas/fe-victoria/mantener-fuego' }
            ]
        },
        {
            label: 'Vida Moral y Ética Cristiana',
            collapsed: true,
            items: [
                { label: 'La pureza del corazón', slug: 'ensenanzas-practicas/moral/pureza-corazon' },
                { label: 'La santidad en tiempos modernos', slug: 'ensenanzas-practicas/moral/santidad-moderna' },
                { label: 'La verdad frente al engaño', slug: 'ensenanzas-practicas/moral/verdad-vs-engano' },
                { label: 'El peligro de las apariencias', slug: 'ensenanzas-practicas/moral/peligro-apariencias' },
                { label: 'La integridad en el trabajo y la sociedad', slug: 'ensenanzas-practicas/moral/integridad-trabajo' },
                { label: 'Cómo ser luz en medio de la oscuridad', slug: 'ensenanzas-practicas/moral/ser-luz' },
                { label: 'La tentación de los ojos y del orgullo', slug: 'ensenanzas-practicas/moral/tentacion-ojos-orgullo' },
                { label: 'La fidelidad en el matrimonio', slug: 'ensenanzas-practicas/moral/fidelidad-matrimonio' },
                { label: 'La mayordomía financiera y el diezmo', slug: 'ensenanzas-practicas/moral/mayordomia-financiera' },
                { label: 'La honestidad en todas las áreas', slug: 'ensenanzas-practicas/moral/honestidad' },
                { label: 'El respeto a la autoridad', slug: 'ensenanzas-practicas/moral/respeto-autoridad' },
                { label: 'La defensa de los valores bíblicos', slug: 'ensenanzas-practicas/moral/defensa-valores' }
            ]
        },
        {
            label: 'Vida de Crecimiento y Madurez Espiritual',
            collapsed: true,
            items: [
                { label: 'Creciendo en la gracia y el conocimiento', slug: 'ensenanzas-practicas/crecimiento/crecer-en-gracia' },
                { label: 'La disciplina espiritual diaria', slug: 'ensenanzas-practicas/crecimiento/disciplina-espiritual' },
                { label: 'La corrección y el aprendizaje', slug: 'ensenanzas-practicas/crecimiento/correcion-y-aprendizaje' },
                { label: 'Cómo perseverar en la fe', slug: 'ensenanzas-practicas/crecimiento/perseverar-en-fe' },
                { label: 'La madurez del creyente en las pruebas', slug: 'ensenanzas-practicas/crecimiento/madurez-en-pruebas' },
                { label: 'Cómo mantener la pasión por Dios', slug: 'ensenanzas-practicas/crecimiento/mantener-pasion' },
                { label: 'De creyente a discípulo', slug: 'ensenanzas-practicas/crecimiento/creyente-a-discipulo' },
                { label: 'Cómo fortalecer la fe en comunidad', slug: 'ensenanzas-practicas/crecimiento/fortalecer-fe' },
                { label: 'Las etapas del crecimiento espiritual', slug: 'ensenanzas-practicas/crecimiento/etapas-crecimiento' },
                { label: 'El gozo de servir a Cristo', slug: 'ensenanzas-practicas/crecimiento/gozo-servir' }
            ]
        },
        {
            label: 'Vida de Adoración y Presencia de Dios',
            collapsed: true,
            items: [
                { label: 'Qué significa adorar en espíritu y en verdad', slug: 'ensenanzas-practicas/adoracion/adorar-en-espiritu' },
                { label: 'La alabanza como estilo de vida', slug: 'ensenanzas-practicas/adoracion/alabanza-estilo-vida' },
                { label: 'Cómo preparar el corazón para adorar', slug: 'ensenanzas-practicas/adoracion/preparar-corazon' },
                { label: 'La adoración en medio del dolor', slug: 'ensenanzas-practicas/adoracion/adoracion-en-dolor' },
                { label: 'El poder de la música en la presencia de Dios', slug: 'ensenanzas-practicas/adoracion/poder-musica' },
                { label: 'La reverencia en el culto', slug: 'ensenanzas-practicas/adoracion/reverencia-culto' },
                { label: 'Cómo cultivar una vida de adoración personal', slug: 'ensenanzas-practicas/adoracion/adoracion-personal' },
                { label: 'La adoración que atrae la gloria de Dios', slug: 'ensenanzas-practicas/adoracion/adoracion-gloria' },
                { label: 'La actitud del adorador genuino', slug: 'ensenanzas-practicas/adoracion/actitud-adorador' },
                { label: 'El altar familiar y la adoración en casa', slug: 'ensenanzas-practicas/adoracion/altar-familiar' }
            ]
        },
        {
            label: 'Vida de Esperanza y Eternidad',
            collapsed: true,
            items: [
                { label: 'La esperanza bienaventurada del creyente', slug: 'ensenanzas-practicas/esperanza/esperanza-bienaventurada' },
                { label: 'Viviendo con una mentalidad eterna', slug: 'ensenanzas-practicas/esperanza/mentalidad-eterna' },
                { label: 'El cielo: nuestro destino final', slug: 'ensenanzas-practicas/esperanza/cielo-destino' },
                { label: 'Cómo prepararnos para el regreso de Cristo', slug: 'ensenanzas-practicas/esperanza/preparacion-regreso' },
                { label: 'Las promesas de Dios para los fieles', slug: 'ensenanzas-practicas/esperanza/promesas-dios' },
                { label: 'El juicio y la recompensa del creyente', slug: 'ensenanzas-practicas/esperanza/juicio-y-recompensa' },
                { label: 'La vida después de la muerte según la Biblia', slug: 'ensenanzas-practicas/esperanza/vida-despues-muerte' },
                { label: 'Cómo mantener la fe hasta el fin', slug: 'ensenanzas-practicas/esperanza/mantener-fe' },
                { label: 'La herencia eterna de los santos', slug: 'ensenanzas-practicas/esperanza/herencia-eterna' },
                { label: 'La victoria final del pueblo de Dios', slug: 'ensenanzas-practicas/esperanza/victoria-final' }
            ]
        },
    ],
};
