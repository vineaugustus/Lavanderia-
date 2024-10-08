package br.net.lol.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import br.net.lol.dto.UsuarioDTO;
import br.net.lol.model.UsuarioModel;
import br.net.lol.repository.UsuarioRepository;

public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<UsuarioDTO> findAll() {
        return usuarioRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

        public Optional<UsuarioDTO> findById(Long id) {
        return usuarioRepository.findById(id).map(this::convertToDto);
    }

        public UsuarioDTO save(UsuarioDTO usuarioDTO) {
        UsuarioModel usuarioModel = convertToModel(usuarioDTO);
        UsuarioModel savedUsuario = usuarioRepository.save(usuarioModel);
        return convertToDto(savedUsuario);
    }

     private UsuarioDTO convertToDto(UsuarioModel model) {
        UsuarioDTO dto = new UsuarioDTO();

        dto.setId(model.getId());
        dto.setName(model.getName());
        dto.setEmail(model.getEmail());
        dto.setPassword(model.getPassword());
        dto.setCpf(model.getCpf());
        dto.setPhone(model.getPhone());
        dto.setAddress(model.getAddress());

        return dto;
    }

    private UsuarioModel convertToModel(UsuarioDTO dto) {
        UsuarioModel model = new UsuarioModel();

        model.setId(dto.getId());
        model.setName(dto.getName());
        model.setEmail(dto.getEmail());
        model.setPassword(dto.getPassword());
        model.setCpf(dto.getCpf());
        model.setPhone(dto.getPhone());
        model.setAddress(dto.getAddress());

        return model;
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    public UsuarioRepository getUsuarioRepository() {
        return this.usuarioRepository;
    }

    public void setUsuarioRepository(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
}
