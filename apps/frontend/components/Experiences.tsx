import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const EXPERIENCES_QUERY = gql`
	query Query {
		experiences {
			id
			title
			content {
				document
			}
			skills {
				name
			}
		}
	}
`;

export default function Experiences() {
	const { data, error, loading } = useQuery(EXPERIENCES_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div>
			<p>Experiences</p>
		</div>
	);
}
