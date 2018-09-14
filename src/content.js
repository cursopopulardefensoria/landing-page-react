import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, Row, Col,
 CardSubtitle, CardBody } from 'reactstrap';
import vakinha from './img/vakinha.png';
import ConhecaCarousel from './conheca-carousel';

export default (props) => {
  return (
      <div>
          <CardColumns>

              <Card>
                  <CardBody>
                      <CardTitle>Turma presencial</CardTitle>
                      <CardText>A Coordenação do Curso Popular de Formação de Defensoras e Defensores Públicos torna público o presente edital de seleção de alunos presenciais para o 2° Curso Popular de Formação de Defensoras e Defensores Públicos – Módulo II – 2018.</CardText>
                      <Button color="primary">Ver edital</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>Sobre o curso</CardTitle>
                      <CardText>O curso tem como objetivo o preparo de candidatos para os concursos públicos de ingresso às carreiras de Defensorias Públicas, focando-se na população econômico-social mais vulnerável, sem desprezar as demais interessados em conhecer ou vivenciar uma visão mais crítica do Direito.
                          As aulas serão ministradas na sede da Associação dos Servidores da Defensoria Pública do Estado de São Paulo – ASDPESP, localizada em Rua Boa Vista, n. 254, sala 1817, Centro, São Paulo/SP, com a seleção de 08 (oito) alun@s para o curso presencial.

                          As aulas serão gravadas e, posteriormente, disponibilizadas pela internet, possibilitando que qualquer interessado as acesse para seu uso pessoal.

                          As inscrições poderão ser feitas no período compreendido entre o dia 05 de janeiro de 2018 ao dia 11 de janeiro de 2018, de forma gratuita. E serão realizadas mediante o preenchimento do formulário, que deverá ser preenchido pelo candidato (a), disponível em: https://goo.gl/forms/CuSxyOwaki6rtjmH3
                      </CardText>
                        <Button color="primary">Inscrição para turma presencial</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>100% gratuito</CardTitle>
                      <CardText>Todas as nossas aulas são ministradas por professores voluntários e disponibilizadas gratuitamente via internet.</CardText>
                      <Button color="primary">Assistir aulas online</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>Colabore</CardTitle>
                      <CardText>
                          <p>Junte-se a nós, contribua:</p>
                          <p><img src={vakinha} className="img-fluid" /></p>
                          <p>"Qualquer quantia alimenta nossa luta e faz possível a continuidade dessa empreitada que conta com a contribuição de tanta gente linda!"</p>
                          <p>Sozinhos vamos mais rápido. Juntos vamos mais longe!</p>
                      </CardText>
                  </CardBody>
              </Card>

          </CardColumns>

          <Card className="card-conheca">
              <CardBody>
                  <CardTitle>Conheça</CardTitle>
                  <CardText>

                      <p>O projeto consiste em um Curso Popular de Formação de Defensoras e Defensores Públicos, cujo escopo primordial é o preparo para o ingresso à carreira. Todavia, como o próprio nome indica, a proposta do curso não se restringe a esse objetivo. Com efeito, não concebemos uma "visão esquematizada e mastigada do Direito", típica da maioria dos cursos preparatórios atualmente, mas propomos uma visão crítica aos nossos alunos e alunas.</p>

                      <p>Além disso, na tentativa de equalizar o acesso à carreira, o curso é destinado a pessoas de baixa renda que não teriam condições de frequentar cursos preparatórios tradicionais.</p>

                      <Row className="justify-content-md-center">
                          <Col md="9">
                            <ConhecaCarousel />
                          </Col>
                      </Row>

                      <p>Em adição, o curso é inteiramente gratuito e totalmente colaborativo, de modo que há apoio de inúmeras pessoas, as quais se voluntariam a dar aulas, doar livros ou contribuir financeiramente.Estamos situados na Associação dos Servidores da Defensoria Pública. Infelizmente, por ser um espaço pequeno, só podemos oferecer 20 vagas presenciais, porém, para tornar o curso mais acessível, todas as aulas são gravadas e disponibilizadas em nosso canal no Youtube e no sítio do curso, de maneira que qualquer interessado possa assisti-las sem qualquer contrapartida.</p>

                  </CardText>
              </CardBody>
          </Card>
      </div>
  );
};
