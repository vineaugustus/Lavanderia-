package br.net.lol.service;


import br.net.lol.dto.RoupaDto;
import br.net.lol.model.RoupaModel;
import br.net.lol.repository.RoupaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoupaService {

    @Autowired
    private RoupaRepository roupaRepository;

    public List<RoupaDto> getAllRoupas() {
        return roupaRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public RoupaDto saveRoupa(RoupaDto roupaDto) {
        RoupaModel roupa = convertToEntity(roupaDto);
        roupa = roupaRepository.save(roupa);
        return convertToDTO(roupa);
    }

    public RoupaDto updateRoupa(Long id, RoupaDto roupaDto) {
        Optional<RoupaModel> optionalRoupa = roupaRepository.findById(id);
        if (optionalRoupa.isPresent()) {
            RoupaModel roupa = optionalRoupa.get();
            roupa.setNome(roupaDto.getNome());
            roupa.setPreco(roupaDto.getPreco());
            roupa.setPrazo(roupaDto.getPrazo());
            roupa = roupaRepository.save(roupa);
            return convertToDTO(roupa);
        } else {
            throw new RuntimeException("Roupa não encontrada");
                }
            }

        public void deleteRoupa(Long id) {
            if (roupaRepository.existsById(id)) {
            roupaRepository.deleteById(id);
        } else {
            throw new RuntimeException("Roupa não encontrada");
        }
        }
    
    private RoupaDto convertToDTO(RoupaModel roupa) {
        RoupaDto dto = new RoupaDto();
        dto.setId(roupa.getId());
        dto.setNome(roupa.getNome());
        dto.setPreco(roupa.getPreco());
        dto.setPrazo(roupa.getPrazo());
        return dto;
    }

    private RoupaModel convertToEntity(RoupaDto dto) {
        RoupaModel roupa = new RoupaModel();
        roupa.setId(dto.getId());
        roupa.setNome(dto.getNome());
        roupa.setPreco(dto.getPreco());
        roupa.setPrazo(dto.getPrazo());
        return roupa;
    }
}
