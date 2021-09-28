import Users from "../../components/users"
import { useRouter } from "next/router";
import Container from "../../components/container";
//destructuramos
const UserProfile = ({data}) => {
    const user = data
    const router = useRouter();
    const {id} = router.query;
    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.data.avatar} alt="" style={{borderRadius: '50%'}} />
                        </div>
                        <div className="card-body text-center">
                            <h3>
                                {user.data.id} {user.data.first_name} {user.data.last_name}
                            </h3>
                            <p>
                                Email: {user.data.email}
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
        </Container>
    )
}
export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/users/id_user',
        // Object variant:
        { params: { id: 'id_user' } },
      ],
      fallback: true,
    }
  }
export async function getStaticProps(context) {
    const res = await fetch(`https://reqres.in/api/users/${context.params.id}`)
    const data = await res.json()  
    console.log(data)
    if (!data)
      return { notFound: true }
    else
        return { props: { data } } 
}

export default UserProfile;