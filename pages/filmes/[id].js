import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = (props) => {
  return (
    <>
      <Pagina titulo={props.filme.title}>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.filme.poster_path} />
          </Col>

          <Col md={9}>
            <p><strong>Orçamento: </strong> {props.filme.budget}</p>
            <p><strong>Data: </strong> {props.filme.release_date}</p>
            <p><strong>Tempo: </strong> {props.filme.runtime} min</p>
            <p><strong>Avaliação: </strong> {props.filme.vote_average}</p>

            <div>
              <p><strong>Gêneros: </strong></p>
              <ul>
                {props.filme.genres.map(item => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>

          </Col>
        </Row>

        <h2>Atores</h2>
        <Row>
          {props.atores.map(item => (
            
            <Col md={2} className="mb-3">
            <Link href={"/atores/" + item.id}>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.profile_path} title={item.name} />
            </Link>
            </Col>
            
          ))}
        </Row>
      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  const getAtores = await apiFilmes.get('/movie/' + id + "/credits")
  const atores = getAtores.data.cast

  return {
    props: { filme, atores },
  }
}