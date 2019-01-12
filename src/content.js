import React from 'react';
import { Card, Button, CardTitle, CardText, CardColumns, Row, Col, CardBody } from 'reactstrap';
import vakinha from './img/vakinha.png';
import links from './links';

export default (props) => {
  return (
      <div>
          <Card className="card-conheca">
              <CardBody>
                  <CardTitle>Inscrições abertas para turma presencial</CardTitle>
                  <CardText>
                      <p>
                          A Comissão de Seleção do Curso Popular de Formação de Defensoras e Defensores
                          Públicos torna público o presente Edital de seleção de 11 (onze) alunas e alunos, com
                          respectiva lista de espera, para a modalidade presencial do 3° Curso Popular de
                          Formação de Defensoras e Defensores Públicos – Módulo II – 1º semestre de 2019.
                      </p>
                      <Button color="primary" href="/Edital de Seleção do 3º Curso Popular Defensoria - Módulo II - 2019.pdf">
                          Visualizar edital
                      </Button>
                  </CardText>
              </CardBody>
          </Card>

          <Card className="card-conheca">
              <CardBody>
                  <CardTitle>Conheça</CardTitle>
                  <CardText>

                      <p>O projeto consiste em um Curso Popular de Formação de Defensoras e Defensores Públicos, cujo escopo primordial é o preparo para o ingresso à carreira. Todavia, como o próprio nome indica, a proposta do curso não se restringe a esse objetivo. Com efeito, não concebemos uma "visão esquematizada e mastigada do Direito", típica da maioria dos cursos preparatórios atualmente, mas propomos uma visão crítica aos nossos alunos e alunas.</p>
                      <p>Além disso, na tentativa de equalizar o acesso à carreira, o curso é destinado a pessoas de baixa renda que não teriam condições de frequentar cursos preparatórios tradicionais.</p>
                      <p>Em adição, o curso é inteiramente gratuito e totalmente colaborativo, de modo que há apoio de inúmeras pessoas, as quais se voluntariam a dar aulas, doar livros ou contribuir financeiramente.</p>
                      <p>Estamos situados na Associação dos Servidores da Defensoria Pública. Infelizmente, por ser um espaço pequeno, só podemos oferecer 20 vagas presenciais, porém, para tornar o curso mais acessível, todas as aulas são gravadas e disponibilizadas em nosso canal no Youtube e no sítio do curso, de maneira que qualquer interessado possa assisti-las sem qualquer contrapartida.</p>

                  </CardText>
              </CardBody>
          </Card>


          <CardColumns>

              <Card>
                  <CardBody>
                      <CardTitle>Turma presencial</CardTitle>
                      <CardText>
                          <p>As aulas serão ministradas na sede da Associação dos Servidores da Defensoria Pública do Estado de São Paulo – ASDPESP. As aulas serão gravadas e, posteriormente, disponibilizadas pela internet, possibilitando que qualquer interessad@ as acesse para seu uso pessoal.</p>
                          <p>Todas as atividades do curso e respectivo eventual material didático são gratuitos para @s alun@s, sendo custeados pel@s organizadoras e organizadores do “Curso Popular de Formação de Defensoras e Defensores Públicos” com recursos oriundos de doações.</p>
                            <Button color="primary" href="/Edital de Seleção do 3º Curso Popular Defensoria - Módulo II - 2019.pdf">
                              Visualizar edital
                          </Button>
                      </CardText>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>Colabore</CardTitle>
                      <CardText>
                          <p>Faça parte dessa corrente que incentiva a democratização do ensino!</p>
                          <Row className="youtube-row">
                              <Col md="12">
                                  <div className="embed-responsive embed-responsive-16by9">
                                      <iframe
                                          title="youtube-live-stream"
                                          className="embed-responsive-item"
                                          src="https://www.youtube.com/embed/vf0AFjW0Zhw"
                                          allow="encrypted-media" allowFullScreen>
                                      </iframe>
                                  </div>
                              </Col>
                          </Row>
                          <p></p>
                          <p><a href={links.vakinha}>
                                  <img src={vakinha} className="img-fluid" alt="Vakinha Curso Popular Defensoria"/>
                          </a></p>
                          <p><a href={links.vakinha}>Gostou do projeto? Colabore!</a></p>
                          <p>"Sem dúvidas a trajetória neste curso possibilita dar os primeiros passos a caminho da crítica e desconstrução de aspectos do ensino jurídico que nos foi passado na academia. Democratizar o acesso ao conhecimento e aos cargos públicos, em especial, o de Defensoras e Defensores Públicos é essencial!"</p>
                          <p>Sozinhos vamos mais rápido. Juntos vamos mais longe!</p>
                      </CardText>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>100% gratuito</CardTitle>
                      <CardText>Todas as nossas aulas são ministradas por professores voluntários e disponibilizadas gratuitamente via internet.</CardText>
                      <Button href={links.aulasOnline} color="primary">Assistir aulas online</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>Contato</CardTitle>
                      <CardText>
                          <p>Para dúvidas e informações sobre o curso, envie e-mail para cursopopulardefensoria@gmail.com</p>
                      </CardText>
                  </CardBody>
              </Card>

          </CardColumns>
      </div>
  );
};
