import ClientWorkspace from './ClientWorkspace';

export function generateStaticParams() {
  // Since we don't have a database yet, pre-render some mock project IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  return <ClientWorkspace params={params} />;
}
