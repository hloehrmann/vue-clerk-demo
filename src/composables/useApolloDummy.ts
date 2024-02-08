import { useAuth } from 'vue-clerk';

const { getToken } = useAuth();

const getProducts = () => {
	const products = []

	// Now I need a signed JWT token to use it for my backend request as a bearer token
	const token = getToken();

	// Here I would be using it in Apollo withn something like
	// new ApolloLink((operation, forward) => {
	// 	operation.setContext(({ headers }) => ({
	// 		headers: {
	// 			...headers,
	// 			authorization: token.value
	// 				? `Bearer ${token.value}`
	// 				: null
	// 		},
	// 	}));

	return products;
}

export function useApolloDummy() {
	return { getProducts }
}
