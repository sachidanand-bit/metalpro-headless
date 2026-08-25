const GRAPHQL_URL = 'https://cxm.ihg.mybluehost.me/website_e18f7bf7/graphql';

const query = `
query MasterAuditQuery {
  pages(first: 2) {
    nodes { title slug isFrontPage uri }
  }
  posts(first: 2) {
    nodes { title slug featuredImage { node { sourceUrl } } categories { nodes { name } } }
  }
  faqs(first: 2) {
    nodes { title faqCategories { nodes { name slug } } }
  }
  menus {
    nodes { name slug menuItems { nodes { label url path } } }
  }
}
`;

async function runAudit() {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  console.log('=== WPGRAPHQL AUDIT RESULTS ===');
  console.log(JSON.stringify(json.data, null, 2));
}

runAudit();