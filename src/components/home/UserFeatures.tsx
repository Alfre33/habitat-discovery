import Image from "next/image";

const features = [
  {
    name: "Descubrimiento instantáneo",
    description:
      "Explora opciones cercanas con mapas interactivos y galerías visuales y cncuentra zoológicos y acuarios en tu región fácilmente.",
  },
  {
    name: "Compra rápida y segura",
    description: `Adquiere tus boletos en minutos. Garantizamos pagos seguros y opciones electrónicas.`,
  },
  { name: "Información completa", description: 'Planifica tus visitas con datos actualizados y accede a catálogos detallados de especies y actividades.' },
  { name: "Promociones exclusivas", description: "Aprovecha descuentos y ofertas especiales. Descubre beneficios únicos para cada visita." },
  { name: "Califica y ve reseñas de otros usuarios", description: "Ve las puntuaciones de otros usuarios y da tu propia reseña a los lugares que visistes " },
  {
    name: "Facil acceso y simplificado",
    description:
      "Puedes acceder desde cualquier dispositivo y tener tus entradas digitales de manera sencilla",
  },
];

export const UserFeatures = () => {
  return (
    <div className="bg-white bg-gradient-to-b from-watercourse-400 to-transparent">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-watercourse-100 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-watercourse-50">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-watercourse-700 pt-4">
                <dt className="font-semibold text-lg text-watercourse-600">{feature.name}</dt>
                <dd className="mt-2 text-md text-watercourse-900">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="Ventajas de habitat discovery holes."
            src="/ventajas/ventajas3.jpg"
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Ventajas de habitat discovery groove."
            src="/ventajas/ventajas4.jpg"
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Ventajas de habitat discovery."
            src="/ventajas/ventajas2.jpg"
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Ventajas de habitat discovery."
            src="/ventajas/ventajas1.jpg"
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};
