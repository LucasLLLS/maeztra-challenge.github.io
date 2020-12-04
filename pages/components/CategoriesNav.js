import Link from 'next/link';
import Icon from './Icons';

const CategoriesNav = () => {
  const categories = [
    {
      name: 'Novidades',
      slug: 'novidades',
    },
    {
      name: 'Vestidos',
      slug: 'vestidos',
    },
    {
      name: 'Roupas',
      slug: 'roupas',
    },
    {
      name: 'Sapatos',
      slug: 'sapatos',
    },
    {
      name: 'Lingerie',
      slug: 'lingerie',
    },
    {
      name: 'Acessórios',
      slug: 'acessórios',
    },
    {
      name: 'OUTLET',
      slug: 'outlet',
    },
  ];
  return (
    <div>
      {
        categories.map((cat) => (
          <Link href="/" key={cat.slug}>
            <a>
              <Icon name="icon-dress" width={12} height={15} />
              {cat.name}
            </a>
          </Link>
        ))
      }
    </div>
  )
};

export default CategoriesNav;
