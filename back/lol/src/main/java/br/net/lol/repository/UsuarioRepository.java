package br.net.lol.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.lol.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
}