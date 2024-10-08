package br.net.lol.service;

import br.net.lol.dto.FuncionarioDto;
import br.net.lol.model.FuncionarioModel;
import br.net.lol.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public List<FuncionarioDto> findAll() {
        return funcionarioRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Optional<FuncionarioDto> findById(Long id) {
        return funcionarioRepository.findById(id).map(this::convertToDto);
    }

    public FuncionarioDto save(FuncionarioDto funcionarioDto) {
        FuncionarioModel funcionarioModel = convertToModel(funcionarioDto);
        FuncionarioModel savedFuncionario = funcionarioRepository.save(funcionarioModel);
        return convertToDto(savedFuncionario);
    }

    public void deleteById(Long id) {
        funcionarioRepository.deleteById(id);
    }

    private FuncionarioDto convertToDto(FuncionarioModel funcionarioModel) {
        FuncionarioDto funcionarioDto = new FuncionarioDto();
        funcionarioDto.setId(funcionarioModel.getId());
        funcionarioDto.setEmail(funcionarioModel.getEmail());
        funcionarioDto.setNome(funcionarioModel.getNome());
        funcionarioDto.setDtNasc(funcionarioModel.getDtNasc().toString());
        funcionarioDto.setSenha(funcionarioModel.getSenha());
        return funcionarioDto;
    }

    private FuncionarioModel convertToModel(FuncionarioDto funcionarioDto) {
        FuncionarioModel funcionarioModel = new FuncionarioModel();
        funcionarioModel.setId(funcionarioDto.getId());
        funcionarioModel.setEmail(funcionarioDto.getEmail());
        funcionarioModel.setNome(funcionarioDto.getNome());
        funcionarioModel.setDtNasc(LocalDate.parse(funcionarioDto.getDtNasc()));
        funcionarioModel.setSenha(funcionarioDto.getSenha());
        return funcionarioModel;
    }
}
